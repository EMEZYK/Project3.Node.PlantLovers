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

const activateOfferWithId = async (id, data) => {
  const activatedOffer = {
    ...data,
    isActive: true,
  };
  return await Offer.updateOne(id, activatedOffer);
};

const archiveOfferWithId = async (id, data) => {
  const archivedOffer = {
    ...data,
    isArchived: true,
  };
  return await Offer.updateOne(id, archivedOffer);
};

const addOneView = async (id, data) => {
  const addedView = {
    ...data,
    views: data.views + 1,
  };
  return await Offer.updateOne(id, addedView);
};

export {
  createOffer,
  deleteOffer,
  updateOffer,
  activateOfferWithId,
  archiveOfferWithId,
  addOneView,
} from "commands";
