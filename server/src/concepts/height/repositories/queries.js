import Height from "../model/Height.js";

export async function getHeight(heightId) {
  const height = await Height.findById(heightId);

  return height;
}

export async function getAllHeights() {
  const heights = await Height.find();

  return heights;
}

export async function findHeightByValue(newHeightValue) {
  const findHeight = await Height.findOne({ range: newHeightValue });
  return findHeight;
}
