const moment = require("moment");

Object.assign(module.exports, {
    sortOffersByMostRecent
});

function sortOffersByMostRecent(offers) {
    return offers.sort(compareByMostRecent);
}

function compareByMostRecent(offer1, offer2) {
    const date1 = moment(offer1.publishedAt, "DD-MM-YYYY");
    const date2 = moment(offer2.publishedAt, "DD-MM-YYYY");
    return date2 - date1;
  }