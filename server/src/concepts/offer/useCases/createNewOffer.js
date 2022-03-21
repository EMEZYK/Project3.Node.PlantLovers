import { createOffer } from "../repositories/commands.js";
import { findCategoryByName } from "../../category/repositories/queries.js";
import { findHeightByValue } from "../../height/repositories/queries.js";

export async function createNewOffer(body) {
  try {
    const offer = await createOffer({
      title: body.title,
      description: body.description,
      city: body.city,
      location: body.location || {},
      phoneNumber: body.phoneNumber,
      photos: body.photos,
      category: getCategoryId(body.category),
      height: getHeightId(body.height),
      price: body.price,
    });

    return offer;
  } catch (err) {
    console.log(err);
    return new Error("Offer wasn't created");
  }
}

async function getCategoryId(categoryName) {
  const category = await findCategoryByName(categoryName);
  return category._id;
}

async function getHeightId(heightRange) {
  const height = await findHeightByValue(heightRange);
  return height._id;
}
