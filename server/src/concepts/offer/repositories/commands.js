/* eslint-disable no-unused-vars */
import Offer from "../model/Offer";

const createOffer = async (data) => {
  const newOffer = new Offer({
    ...data,
  });

  try {
    await newOffer.save();
    return newOffer;
  } catch (err) {
    console.log(err);
  }
};

const deleteOffer = async (offerId) => {
  await Offer.deleteOne({ _id: offerId });
};

const updateOffer = async (filter, data) => {
  await Offer.updateOne(filter, data);
};

export { createOffer, deleteOffer, updateOffer } from "commands";
