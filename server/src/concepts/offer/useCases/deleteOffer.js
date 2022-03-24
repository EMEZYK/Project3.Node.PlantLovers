import { deleteOffer } from "../repositories/commands.js";

export const deleteOfferWithId = (id) => {
  return deleteOffer(id);
};
