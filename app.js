const express = require('express');
const { getAllOffers, getOffers, getRegionOffers, getCategoryOffers } = require("./controllers");
const µ = require("./utils/µ");

const app = express();
const port = process.env.PORT || 5000;

// Views
app.set('view engine', 'pug');
app.get('/', (_, res) => { res.render('index', { title: "Wecome", message: "Go to /offers/220" }); });

// Offers
app.get("/offers", µ.send(getAllOffers));
app.get("/offers/regions/:regionIndex/categories/:categoryIndex", µ.send(getOffers));

app.get("/offers/regions/:regionIndex", µ.send(getRegionOffers));
app.get("/offers/categories/:categoryIndex", µ.send(getCategoryOffers));

// Start app
app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) });

