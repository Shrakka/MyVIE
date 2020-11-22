const { fetchOffers } = require("./fetchOffers");
const { sortOffersByMostRecent } = require("./sortOffersByMostRecent");

Object.assign(module.exports, {
    fetchOffers,
    sortOffersByMostRecent
});
