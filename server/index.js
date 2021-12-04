require('dotenv').config();

const cors = require('cors');
const express = require('express');
const htpp = require('http');
const axios = require('axios');

const config = require('./config');

const app = express();
const server = htpp.createServer(app);

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cors());

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.post("/authenticate", (req, res) => {
  const { code } = req.body;

  axios(`https://github.com/login/oauth/access_token`, {
    method: "POST",
    data: {
      client_id: config.client_id,
      client_secret: config.client_secret,
      redirect_uri: config.redirect_uri,
      code
    },
  })
    .then(({ data }) => {
        const params = new URLSearchParams(data);
        const access_token = params.get("access_token");

        return axios('https://api.github.com/user', {
          headers: {
            Authorization: `token ${access_token}`,
          }
        })
      })
    .then(({ data }) => {
      res.status(200).json(data)
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
});

server.listen(config.PORT, () => console.log('Listening to port: ' + config.PORT))
