const express = require('express');
const URL = require('./models/url');
const urlRoute = require('./routes/url');
const  { connectToDb }  = require('./connection');
const app = express();
const PORT = 8000;

connectToDb('mongodb://localhost:27017/short-url').then(()=> console.log("mongodb-connected"));


app.use(express.json())
app.use('/url' , urlRoute);



app.listen(PORT , ()=>console.log(`Listening at ${PORT}`));