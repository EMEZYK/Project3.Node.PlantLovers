import { getOffers } from "../useCases/getOffers.js";
import {
  activateOfferWithId,
  archiveOfferWithId,
  addOneView,
} from "../repositories/commands.js";
import createNewOffer from "../useCases/createNewOffer";
import deleteOfferWithId from "../useCases/deleteOfferWithId";
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
    return res.status(201).send(`Offer was added!`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const deleteOffer = async (req, res) => {
  try {
    const deletedOffer = await deleteOfferWithId(req.params.id);
    if (!deletedOffer) return res.status(404).send("There is no offer");
  } catch (error) {
    return res.status(500).send(error.message);
  }
  return res.status(200).send(`Offer with ${req.params.id} was deleted`);
};

export const activateOffer = async (req, res) => {
  try {
    const activatedOffer = await activateOfferWithId(req.params.id);
    if (!activatedOffer) {
      return res.status(404).send("There is no offer");
    }
    return res.status(200).send({
      message: "Offer was activated",
      data: activatedOffer,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const archiveOffer = async (req, res) => {
  try {
    const decoded = jwt.decode(req.headers.token);
    const userId = decoded.sub;
    const archivedOffer = await archiveOfferWithId(req.params.id, userId);
    if (!archivedOffer) {
      return res.status(404).send("There is no offer");
    }
    return res.status(200).send(`Offer was archived!`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const addView = async (req, res) => {
  try {
    const viewAdded = await addOneView(req.params.id);
    if (!viewAdded) {
      return res.status(404).send("There is no offer");
    }
    return res.status(200).send("View was added");
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
