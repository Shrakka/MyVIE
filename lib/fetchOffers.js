const axios = require("axios");
const https = require("https");
const parser = require('fast-xml-parser');
const moment = require("moment");

Object.assign(module.exports, { fetchOffers });

async function fetchOffers({ regionIndex = 4, categoryIndex = 144 } = {}) {
  const url = `https://www.civiweb.com/FR/offre-liste/zone-geographique/${regionIndex}/secteur-activite/${categoryIndex}.aspx`;
  const offersHTML = await fetchPage(url);
  const offers = parseOffers(offersHTML, { url });
  return offers.sort(compareByMostRecent);
}


async function fetchPage(url) {
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  const page = await axios.get(url, { httpsAgent });
  return page.data;
}

function parseOffers(offersHTML, { url }) {
  const offersXMLObject = parser.parse(offersHTML.toString());
  const articlesXML = offersXMLObject.html?.body?.form?.section?.div?.section?.ul?.li?.li?.div?.div[0]?.section?.section?.article;
  if (! articlesXML) { return []; }
  if (! Array.isArray(articlesXML)) { return [mapOffer(articlesXML)]; }

  return articlesXML.map(article => mapOffer(article));


  function mapOffer(offer) {
    return {
      company: getCompany(),
      job: offer.h1.a,
      publishedAt: getPublicationDate(),
      url
    };

    function getCompany() {
      return offer.p[0].slice("ETABLISSEMENT : ".length);
    }

    function getPublicationDate() {
      return offer.time.slice("Publié le ".length);
    }
  }
}

function compareByMostRecent(offer1, offer2) {
  const date1 = moment(offer1.publishedAt, "DD-MM-YYYY");
  const date2 = moment(offer2.publishedAt, "DD-MM-YYYY");
  return date2 - date1;
}