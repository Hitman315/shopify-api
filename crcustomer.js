const request = require("request");
const express = require("express");
const app = express();

let apikey ='a5a72629b96df6df2886c6d759a4b99a'
let endpoint ='customers' 
let pass = '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'
let crcustomer = {
  'method': 'POST',
  'url': `https://${apikey}:${pass}@d27b41-2.myshopify.com/admin/api/2023-04/${endpoint}.json`,
  'headers': {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    'customer': {
        "first_name":"Ravindra",
        "last_name":"Roy",
        "email":"ravind@gmail.com",
        "phone":7845754975
      
    },
  }),
};

app.get("/newcustomer", (req, res) => {
  request(crcustomer, (error, response) => {
    if (error) throw new Error(error);
    res.send(response.body);
    console.log(response.body);
  });
});

app.listen(5000);



//create customer: http://localhost:5000/newcustomer
//create order: http://localhost:5000/crorders
//create newProduct: http://localhost:5000/newproduct
//get orders details: http://localhost:5000/getorders
//get orders by order id: http://localhost:5000/getordersbyid
