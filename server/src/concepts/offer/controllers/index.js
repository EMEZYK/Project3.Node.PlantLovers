import { getOffers } from "../useCases/getOffers.js";
import createNewOffer from "../useCases/createNewOffer";
import validateCreateOffer from "../model/OfferValidation";
import { updateOfferFunc } from "../useCases/updateOffer";
import jwt from "jsonwebtoken";

export const getAllOffers = async (req, res) => {
  try {
    const offers = await getOffers(req.body);
    return res.status(200).send(offers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const createOffer = async (req, res) => {
  const validationOffer = validateCreateOffer(req.body);
  if (validationOffer.error) {
    return res.status(400).send("Invalid data");
  }
  try {
    await createNewOffer(req.body);
    return res.status(201).send(`Offer added!`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updateOffer = async (req, res) => {
  const validationCheck = validateCreateOffer(req.body);
  if (validationCheck.error) {
    return res.status(400).send("Invalid data");
  }
  try {
    const updatedOffer = await updateOfferFunc(req.params.id, userId, req.body);
    const decoded = jwt.decode(req.headers.token);
    const userId = decoded.sub;
    return res.status(200).send({
      message: "Offer was updated",
      data: updatedOffer,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
