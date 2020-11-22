const { getOffers } = require("./getOffers");
const { getAllOffers } = require("./getAllOffers");
const { getCategoryOffers } = require("./getCategoryOffers");
const { getRegionOffers } = require("./getRegionOffers");

Object.assign(module.exports, {
  getAllOffers,
  getOffers,
  getCategoryOffers,
  getRegionOffers
});

