const { fetchOffers } = require("../lib");

Object.assign(module.exports, {
    getOffers
});

async function getOffers(req) {
    const regionIndex = parseFloat(req.params.regionIndex);
    const categoryIndex = parseFloat(req.params.categoryIndex);
    return fetchOffers({ regionIndex, categoryIndex });
}
