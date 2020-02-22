const express = require("express");
const serverless = require("serverless-http");
const request = require('request');

const app = express();
const router = express.Router();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get("/", (req, res) => {
  // api/cors?url=https://www.exemple.com
  const query = req.query.url
  // res.send(query)

  request(
    { url: query },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )

});

// tell the router where is bind to
app.use(`/.netlify/functions/cors`, router);

module.exports = app;
module.exports.handler = serverless(app);