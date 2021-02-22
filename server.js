require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const productsRouter = require("./routes/products");
const errorHandlerMiddleware = require("./middleware/errorHandler");
require("./lib/database");
var path = require('path');

const app = express();

app.use( bodyParser.json() );  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

app.use("/products", productsRouter());

app.get("/",function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
  });


app.use(errorHandlerMiddleware);


//const port = process.env.port || 3000;
app.listen(80, () => console.log(`server listening on port ${port}`));
