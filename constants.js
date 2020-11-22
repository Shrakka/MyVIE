const regionsByIndex = {
    4: "Asie et pacifique",
    2: "Amerique du nord",
    3: "Amerique latine",
    5: "Europe occidentale",
    6: "Europe centrale et orientale",
    7: "Afrique du nord",
    1: "Afrique subsaharienne",
    8: "Proche et Moyen-Orient"
};

const categoriesByIndex = {
    248: "Developpement logiciel",
    211: "Webmaster",
    29: "Informatique industrielle",
    139: "Multimédia / Digital / Numérique",
    250: "Informatique décisionnelle / Data science",
    252: "Intégration progiciel",
    138: "Intelligence artificielle",
    144: "Data extraction analyse",
    247: "Support informatique",
    245: "Architecture / Cloud",
    246: "Sécurité informatique",
    35: "Réseaux et télécoms",
    253: "Maitrise d'ouvrage informatique",
    254: "Maitrise d'oeuvre informatique"
};

const regions = Object.keys(regionsByIndex);
const categories = Object.keys(categoriesByIndex);

Object.assign(module.exports, {
    categories,
    categoriesByIndex,
    regions,
    regionsByIndex,
});
