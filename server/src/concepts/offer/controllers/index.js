import { getOffers } from "../useCases/getOffers.js";
import { createNewOffer } from "../useCases/createNewOffer.js";
import validateCreateOffer from "../model/OfferValidation.js";
import { updateOfferFunc } from "../useCases/updateOffer.js";
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
  const { error } = validateCreateOffer(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    await createNewOffer(req.body);
    return res.status(201).send(`Offer added!`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updateOffer = async (req, res) => {
  const { error } = validateCreateOffer(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const decoded = jwt.decode(req.headers.token);
    const userId = decoded.sub;
    const updatedOffer = await updateOfferFunc(req.params.id, userId, req.body);
    return res.status(200).send({
      message: "Offer was updated",
      data: updatedOffer,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
