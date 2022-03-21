import { getOffers } from "../useCases/getOffers.js";

export const getAllOffers = async (req, res) => {
  try {
    const offers = await getOffers(req.body);
    return res.status(200).send(offers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
