const express = require("express");
const serverless = require("serverless-http");
const request = require('request');

const app = express();
const router = express.Router();


router.get("/", (req, res) => {
  res.json({
    hello: "you"
  });
});

router.get("/:username", (req, res) => {
  const username = req.params.username;
 
  res.json({
    coucou: username
  });
});


// tell the router where is bind to
app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);