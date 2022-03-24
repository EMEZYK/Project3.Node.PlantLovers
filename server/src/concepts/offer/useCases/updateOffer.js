import { updateOffer } from "../repositories/commands.js";
import sendEmail from "../../../services/mail/index.js";
import Offer from "../model/Offer.js";
import User from "../../user/model/User.js";

export const updateOfferFunc = async (offerId, userId, data) => {
  const existingOffer = await Offer.findById(offerId);
  if (!existingOffer) {
    throw new Error("Offer doesn't exists");
  }
  if (existingOffer.userId.toString() !== userId) {
    throw new Error("Access denied");
  }
  const user = await User.findById(userId);
  const email = {
    to: user.email,
    text: "Hey, your offer was successfully updated",
    subject: "Offer updated",
  };
  sendEmail(email);
  return await updateOffer({ _id: offerId }, data);
};
