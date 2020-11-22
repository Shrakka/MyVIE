const { fetchOffers } = require("../lib");

Object.assign(module.exports, {
    getOffers
});

async function getOffers(req) {
    const regionIndex = req.params.regionIndex;
    const categoryIndex = req.params.categoryIndex;
    return fetchOffers({ regionIndex, categoryIndex });
}
