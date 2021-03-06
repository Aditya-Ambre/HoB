const express = require("express");
const router = express.Router();
const axios = require("axios").default;
require("dotenv").config();
const STORENAME = process.env.STORENAME;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
router.get("/products", (req, res) => {
  axios
    .get(`https://${STORENAME}.myshopify.com/admin/api/2022-04/products.json`, {
      headers: {
        "X-Shopify-Access-Token": ACCESS_TOKEN,
      },
    })
    .then((resp) => res.send(resp.data))
    .catch((err) => res.status(err.status || 400).send(err));
});

router.get("/products/:id", (req, res) => {
  axios
    .get(
      `https://${STORENAME}.myshopify.com//admin/api/2022-04/products/${req.params.id}.json

    `,
      {
        headers: {
          "X-Shopify-Access-Token": ACCESS_TOKEN,
        },
      }
    )
    .then((resp) => res.send(resp.data))
    .catch((err) => res.status(err.status || 400).send(err));
});

module.exports = router;
