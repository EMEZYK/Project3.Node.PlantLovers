import { updateOffer } from "../repositories/commands";
import sendEmail from "../../../services/mail";
import Offer from "../model/Offer";
import User from "../../user/model/User";

export const updateOfferFunc = async (offerId, userId, data) => {
  const existingOffer = await Offer.findById(offerId);
  if (!existingOffer) {
    throw new Error("Offer doesn't exists");
  }
  if (existingOffer.userId !== userId) {
    throw new Error("Access denied");
  }
  const user = await User.findById(userId);
  const email = {
    to: user.email,
    text: "Hey, your offer was successfully updated",
    subject: "Offer updated",
  };
  sendEmail(email);
  return await updateOffer({ _id: offerId }, { data });
};
