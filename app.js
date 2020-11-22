const express = require('express');
const cors = require('cors');
const { getAllOffers, getOffers, getRegionOffers, getCategoryOffers } = require("./controllers");
const µ = require("./utils/µ");

const app = express();
app.use(cors())

// Views
app.set('view engine', 'pug');
app.get('/', µ.render({ title: "MyVIE - API", message: "Go to /offers!" }));

// Offers
app.get("/offers", µ.send(getAllOffers));
app.get("/offers/regions/:regionIndex/categories/:categoryIndex", µ.send(getOffers));

app.get("/offers/regions/:regionIndex", µ.send(getRegionOffers));
app.get("/offers/categories/:categoryIndex", µ.send(getCategoryOffers));

// Start app
const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) });

