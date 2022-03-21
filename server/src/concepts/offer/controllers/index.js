import { updateOfferFunc } from "../useCases/updateOffer";

export const updateOffer = async (req, res) => {
  try {
    const updatedOffer = await updateOfferFunc(req.params.id, req.body);
    if (!updatedOffer) {
      return res.status(404).send("There is no offer");
    }
    return res.status(200).send({
      message: "Offer was updated",
      data: updatedOffer,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
