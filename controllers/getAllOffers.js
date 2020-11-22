const { uniqBy } = require("lodash");

const { categoriesByIndex, regionsByIndex } = require("../constants");
const { fetchOffers, sortOffersByMostRecent } = require("../lib");

Object.assign(module.exports, { getAllOffers });


async function getAllOffers() {
    const allRequests = [];
    Object.entries(categoriesByIndex).forEach(([categoryIndex, categoryName]) => {
        Object.entries(regionsByIndex).forEach(([regionIndex, regionName]) => {
            allRequests.push(fetchResults({ categoryIndex, categoryName, regionIndex, regionName }));
        })
    });

    const categorizedOffers = await Promise.all(allRequests);
    const flattenedOffers = flattenOffers(categorizedOffers);
    return {
        categorizedOffers,
        flattenedOffers
    };
}

async function fetchResults({ categoryIndex, categoryName, regionIndex, regionName }) {
    return {
        categoryName,
        regionName,
        categoryIndex,
        regionIndex,
        offers: await fetchOffers({ regionIndex, categoryIndex })
    };
}

function flattenOffers(categorizedOffers) {
    const flattenOffers = categorizedOffers.map(offer => offer.offers).flat();
    const uniqOffers = uniqBy(flattenOffers, "job");
    return {
        nbOfOffers: uniqOffers.length,
        offers: sortOffersByMostRecent(uniqOffers)
    }
}