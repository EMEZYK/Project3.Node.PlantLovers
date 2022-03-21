import Offer from "../model/Offer";

export async function getOffer(offerId) {
  const offer = await Offer.findById(offerId);
  if (!offer) {
    throw "There is no offer with id = " + offerId;
  }
  return offer;
}

export async function getAllOffers(options, limit, skip) {
  const offers = await Offer.find(options).limit(limit).skip(skip);

  return offers;
}
