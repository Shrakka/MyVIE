const { fetchOffers } = require("../lib");

const { categoriesByIndex } = require("../constants");

Object.assign(module.exports, {
  getRegionOffers
});

async function getRegionOffers(req) {
  const regionIndex = req.params.regionIndex;
  const offers = Object.entries(categoriesByIndex).map(fetchCategory);
  return Promise.all(offers);


  async function fetchCategory([categoryIndex, categoryName]) {
    return {
      categoryName,
      categoryIndex,
      offers: await fetchOffers({ regionIndex, categoryIndex })
    };
  }
}
