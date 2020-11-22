const { fetchOffers } = require("../lib");

Object.assign(module.exports, {
    getAllOffers
});

async function getAllOffers() {
    return fetchOffers();
}
