const regionsByIndex = {
    "Asie et pacifique": 4,
    "Amerique du nord": 2,
    "Amerique latine": 3,
    "Europe occidentale": 5,
    "Europe centrale et orientale": 6,
    "Afrique subsaharienne": 1,
    "Afrique du nord": 7,
    "Proche et Moyen-Orient": 8
};

const categoriesByIndex = {
    "Developpement logiciel": 144,
    "Webmaster": 211,
    "Informatique industrielle": 29,
    "Multimédia / Digital / Numérique": 139,
    "Informatique décisionnelle / Data science": 250,
    "Intégration progiciel": 252,
    "Intelligence artificielle": 138,
    "Data extraction analyse": 144,
    "Support informatique": 247,
    "Architecture / Cloud": 245,
    "Sécurité informatique": 246,
    "Réseaux et télécoms": 35,
    "Maitrise d'ouvrage informatique": 253,
    "Maitrise d'oeuvre informatique": 254
};

const regions = Object.keys(regionsByIndex);
const categories = Object.keys(categoriesByIndex);

Object.assign(module.exports, {
    regions,
    regionsByIndex,
    categories,
    categoriesByIndex
});
