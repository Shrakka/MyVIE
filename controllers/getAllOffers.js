const { fetchOffers } = require("../lib");

Object.assign(module.exports, {
    getAllOffers
});

async function getAllOffers() {
    // TODO: fetch all pages for all categories
    return fetchOffers();
}
