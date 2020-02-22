const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

// tell the router where is bind to
app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);