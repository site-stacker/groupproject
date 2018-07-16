
//npm
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');

//env variables
require('dotenv').config();

const 
{
    SERVER_PORT,
    CONNECTION_STRING,
} 
= process.env;
/////////////////////////////////////////////////
const app = express();
app.use(bodyParser.json())
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})
app.listen(SERVER_PORT, () => {
    console.log(`Hey! Listen ${SERVER_PORT}`)
})
/////////////////////////////////////////////////
