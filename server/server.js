const express = require("express");
const mongoose = require("mongoose");
const Mac = require("./models/mac");
const Cola = require("./models/cola");
const Pepsi = require("./models/pepsi");
const Order = require("./models/order");


require("dotenv/config");

const app = express();


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(PORT))
  .catch((err) => console.log(err));

app.get("/mac", (req, res) => {
  Mac.find()
    .then((result) => {
      res.json(result);
      // console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/cola", (req, res) => {
  Cola.find()
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/pepsi", (req, res) => {
  Pepsi.find()
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/order", (req, res) => {
 req=>req.json
    .then((data) => {
    
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
