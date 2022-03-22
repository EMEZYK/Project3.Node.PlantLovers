import { updateOffer } from "../repositories/commands";
import sendEmail from "../../../services/mail";
import Offer from "../model/Offer";
import User from "../../user/model/User";

export const updateOfferFunc = async (OfferId, userId, data) => {
  const existingOffer = await Offer.findById(OfferId);
  if (!existingOffer) {
    throw new Error("Offer doesn't exists");
  }
  if (existingOffer.userId !== userId) {
    throw new Error("Access denied");
  }
  const user = User.findById(userId);
  const email = {
    to: user.email,
    text: "Hey, your offer was successfully updated",
    subject: "Offer updated",
  };
  sendEmail(email);
  return await updateOffer({ _id: OfferId }, { data });
};
