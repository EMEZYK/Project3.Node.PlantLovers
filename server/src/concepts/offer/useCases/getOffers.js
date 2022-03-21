import { getAllOffers } from "../repositories/queries.js";

export const getOffers = async () => {
    return getAllOffers({}, 10, 10);
};
