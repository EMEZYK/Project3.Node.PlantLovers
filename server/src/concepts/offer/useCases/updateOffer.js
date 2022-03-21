import { updateOffer } from "../repositories/commands";
import sendEmail from "../../../services/mail";
import Offer from "../model/Offer";

export const updateOfferFunc = async (OfferId, data, userData) => {
  const existingOffer = await Offer.findById(OfferId);
  if (!existingOffer) {
    throw new Error("Offer doesn't exists");
  }
  const email = {
    to: userData.email,
    text: "Hey, your offer was successfully updated",
    subject: "Offer updated",
  };
  sendEmail(email);
  return await updateOffer({ _id: OfferId }, { data });
};
