/* eslint-disable no-unused-vars */
import Offer from "../model/Offer";

const createOffer = async (data) => {
  const newOffer = new Offer({
    ...data,
  });

  try {
    return await newOffer.save();
  } catch (err) {
    console.log(err);
    return new Error("Offer wasn't created");
  }
};

const deleteOffer = async (offerId) => {
  return await Offer.deleteOne({ _id: offerId });
};

const updateOffer = async (filter, data) => {
  return await Offer.updateOne(filter, data);
};

export { createOffer, deleteOffer, updateOffer } from "commands";
