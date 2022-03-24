/* eslint-disable no-unused-vars */
import Offer from "../model/Offer.js";

export const createOffer = async (data) => {
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

export const deleteOffer = async (offerId) => {
  return await Offer.deleteOne({ _id: offerId });
};

export const updateOffer = async (filter, data) => {
  return await Offer.updateOne(filter, data);
};

export const activateOfferWithId = async (id) => {
  return await Offer.findByIdAndUpdate(id, { isActive: true });
};

export const archiveOfferWithId = async (id, userId) => {
  const existingOffer = await Offer.findById(id);
  if (existingOffer.userId !== userId) {
    throw new Error("Access denied");
  }
  return await Offer.findByIdAndUpdate(id, { isArchived: true });
};

export const addOneView = async (id) => {
  return await Offer.updateOne({ _id: id }, { $inc: { views: 1 } });
};
