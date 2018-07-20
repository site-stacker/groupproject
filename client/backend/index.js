//npm
const express = require('express');
const session = require('express-session')
const massive = require('massive');
const bodyParser = require('body-parser');
const ctrl = require('./ctrl')
const cors = require('cors')
const checkUserSession = require('./middleware/checkUserSession')
//env variables
require('dotenv').config();
const 
{
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} 
= process.env;
//Express, Sessions, Cors, bodyParser, & DB connection
const app = express();
app.use(cors())
app.use(bodyParser.json())
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(checkUserSession)
//enpoints 
////////////////////////////////////////////////
app.get('/api/getProjects/:user_id', ctrl.getProjects)
app.get('/api/getProject/:user_id/:project_id', ctrl.getProject)
app.get('/api/getColors', ctrl.getColors)
app.post('/api/createUser', ctrl.createUser)
app.post('/api/login', ctrl.loginUser)
app.post('/api/logout', (req, res) => { 
    console.log(req.session)
    req.session.destroy();
    console.log(req.session)
    res.status(200).send()
})
app.post('/api/createProject', ctrl.createProject)
app.post('/api/createHeader/:project_id', ctrl.createHeader)
app.put('/api/updateHeader/:headerid', ctrl.updateHeader)
app.put('/api/updateProject/:project_id', ctrl.updateProject)
app.delete('/api/deleteProject/:project_id', ctrl.deleteProject)
app.delete('/api/deleteUser/:user_id', ctrl.deleteUser)
// server ///////////////////////////////////////
app.listen(SERVER_PORT, () => {
    console.log(`Hey! Listen ${SERVER_PORT}`)
})
/////////////////////////////////////////////////
