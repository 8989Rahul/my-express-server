const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extends: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.post("/", (req, res) => {
  // console.log(req.body.crypto, req.body.fiat);
  request(
    "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD",
    (error, res, body) => {
      console.log(body);
    }
  );
});

app.listen(3000, () => console.log("This app is running on port " + 3000));
