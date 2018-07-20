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
app.get('/api/getProjects/:user_id', ctrl.getProjects)
app.get('/api/getProject/:user_id/:project_id', ctrl.getProject)
app.get('/api/getColors', ctrl.getColors)
app.get('/api/getAbout/:user_id/:project_id', ctrl.getAbout)
app.get('/api/getFeature/:user_id/:project_id', ctrl.getFeature)
app.post('/api/createUser', ctrl.createUser)
app.post('/api/createProject', ctrl.createProject)
app.post('/api/createHeader/:project_id', ctrl.createHeader)
app.post('/api/createAbout', ctrl.createAbout)
app.post('/api/createFeature', ctrl.createFeature)
app.put('/api/updateHeader/:header_id', ctrl.updateHeader)
app.put('/api/updateProject/:project_id', ctrl.updateProject)
app.put('/api/updateAbout', ctrl.updateAbout)
app.put('/api/updateFeature', ctrl.updateFeature)
app.delete('/api/deleteProject/:project_id', ctrl.deleteProject)
app.delete('/api/deleteUser/:user_id', ctrl.deleteUser)
app.delete('/api/deleteAbout/:about_id', ctrl.deleteAbout)
app.delete('/api/deleteFeature/:feature_id', ctrl.deleteFeature)


app.listen(SERVER_PORT, () => {
    console.log(`Hey! Listen ${SERVER_PORT}`)
})
/////////////////////////////////////////////////
