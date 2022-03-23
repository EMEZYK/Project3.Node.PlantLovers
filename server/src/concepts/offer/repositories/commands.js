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

export const activateOfferWithId = async (id, data) => {
  const activatedOffer = {
    ...data,
    isActive: true,
  };
  return await Offer.updateOne(id, activatedOffer);
};

export const archiveOfferWithId = async (id, data) => {
  const archivedOffer = {
    ...data,
    isArchived: true,
  };
  return await Offer.updateOne(id, archivedOffer);
};

export const addOneView = async (id, data) => {
  const addedView = {
    ...data,
    views: data.views + 1,
  };
  return await Offer.updateOne(id, addedView);
};
