import { createOffer } from "../repositories/commands.js";

export async function createNewOffer(body) {
  try {
    const offer = await createOffer({
      title: body.title,
      description: body.description,
      city: body.city,
      phoneNumber: body.phoneNumber,
      photos: body.photos,
      category: body.category,
      height: body.height,
      price: body.price,
      forExchange: body.forExchange,
    });

    return offer;
  } catch (err) {
    console.log(err);
    return new Error("Offer wasn't created");
  }
}
