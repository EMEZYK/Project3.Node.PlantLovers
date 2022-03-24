import { createOffer } from "../repositories/commands.js";
import sendEmail from "../../../services/mail/index.js";
import pug from "pug";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import User from "../../user/model/User.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const notifyUserAboutOffer = (user, offer) => {
  const emailData = {
    to: user.email,
    html: pug.renderFile(
      path.resolve(__dirname, "../../../../views/offer.pug"),
      {
        email: user.email,
        title: offer.title,
      }
    ),
    subject: "Offer created - confirmation",
  };

  sendEmail(emailData);
};

export async function createNewOffer(body) {
  const user = await User.findById(body.userId);
  try {
    const offer = await createOffer({
      userId: user._id,
      title: body.title,
      description: body.description,
      city: body.city,
      location: body.location || {},
      phoneNumber: body.phoneNumber,
      photos: body.photos,
      category: body.category,
      height: body.height,
      price: body.price,
      forExchange: body.forExchange,
    });
    notifyUserAboutOffer(user, offer);
    return offer;
  } catch (err) {
    console.log(err);
    return new Error("Offer wasn't created");
  }
}
