const express = require('express');

const { fetchOffers } = require("./controllers");

const app = express();
const port = 3000;


app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: "Hey", message: "Go to /offers/220" });
})

app.get("/data", async (req, res) => {
  const offers = await fetchOffers();
  console.log(Object.keys(offers));
  res.sendFile("views/test.html", { root: __dirname });
})

app.get("/offers", async (req, res) => {
  const offers = await fetchOffers();
  res.send({ offers });
})

app.get("/offers/:index", async (req, res) => {
  const offers = await fetchOffers(parseFloat(req.params.index));
  res.send({ offers });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


