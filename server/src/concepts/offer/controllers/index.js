import OfferValidation from "../model/OfferValidation.js";
import { getOffers } from "../useCases/getOffers.js";

export const getOffersHere = async (req, res) => {
  const validationResult = OfferValidation(req.body);
  if (validationResult.error) {
    return res.status(400).send("invalid data");
  }
  try {
    const offers = await getOffers(req.body);
    return res.status(200).send({
      message: "Offers were collected",
      data: offers,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
