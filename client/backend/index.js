
//npm
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const ctrl = require('./ctrl')

//env variables
require('dotenv').config();
const 
{
    SERVER_PORT,
    CONNECTION_STRING,
} 
= process.env;

//express and DB connection
const app = express();
app.use(bodyParser.json())
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})
//enpoints and server
/////////////////////////////////////////////////
app.get('/api/getProjects/:id', ctrl.getProjects)




app.listen(SERVER_PORT, () => {
    console.log(`Hey! Listen ${SERVER_PORT}`)
})
/////////////////////////////////////////////////
