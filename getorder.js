const request = require("request");
const express = require("express");
const app = express();

let apikey ='a5a72629b96df6df2886c6d759a4b99a'
let endpoint ='orders' 
let pass = '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'
let getOrders = {
  'method': 'GET',
  'url': `https://${apikey}:${pass}@d27b41-2.myshopify.com/admin/api/2023-04/${endpoint}.json`,
  'headers': {
    "Content-Type": "application/json",
  },
  
  
};

app.get("/getorders", (req, res) => {
  request(getOrders, (error, response) => {
    if (error) throw new Error(error);
    res.send(response.body);
    console.log(response.body);
  });
});

app.listen(5000);