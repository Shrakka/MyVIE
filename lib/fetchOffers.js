const axios = require("axios");
const https = require("https");
const parser = require('fast-xml-parser');
const { range, isEmpty } = require("lodash");

Object.assign(module.exports, { fetchOffers });

async function fetchOffers(page = null) {
  let indexes;
  if (! page) {
    indexes = range(240, 250);
  } else {
    indexes = range(page, page + 30);
  }

  const results = await Promise.all(indexes.map(fetchOffer));
  const offers = results.map(result => parseOffers(result.data.toString(), result.request.res.responseUrl)).filter(e => ! isEmpty(e));
  
  return offers;
}

async function fetchOffer(index) {
  const url = `https://www.civiweb.com/FR/offre-liste/zone-geographique/4/secteur-activite/${index}.aspx`;
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  return axios.get(url, { httpsAgent });
}

function parseOffers(offers, requestURL) {
  const offerXMLObj = parser.parse(offers.toString());
  const articlesXML = offerXMLObj.html?.body?.form?.section?.div?.section?.ul?.li?.li?.div?.div[0]?.section?.section?.article || [];
  const results = Array.isArray(articlesXML) ? articlesXML.map(mapOffer) : [mapOffer(articlesXML)];
  return results.filter(e => ! isEmpty(e))

  function mapOffer(offer) {
    return {
      company: offer.p[0].slice("ETABLISSEMENT : ".length),
      job: offer.h1.a,
      publishedAt: offer.time,
      url: requestURL
    }
  }
}
