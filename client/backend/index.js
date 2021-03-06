require('dotenv').config();
//npm
const express = require('express');
const session = require('express-session')
const massive = require('massive');
const bodyParser = require('body-parser');
const ctrl = require('./ctrl')
const cors = require('cors')
const checkUserSession = require('./middleware/checkUserSession')
const path = require('path'); // Usually moved to the start of file
//env variables
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
})

app.use( express.static( `${__dirname}/../build` ) );




app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(checkUserSession)
//enpoints 
////////////////////////////////////////////////
app.get('/api/getProjects/', ctrl.getProjects)
app.get('/api/user/', (req, res) => {
    if(req.session.user){
        res.status(200).send(user)
    } else {
        res.status(401).send('Unauthorized')
    }
})
app.get('/api/getProject/:project_id', ctrl.getProject)
app.get('/api/getColors', ctrl.getColors)
app.get('/api/getAbout/:project_id', ctrl.getAbout)
app.get('/api/getFeature/:project_id', ctrl.getFeature)
app.post('/api/createUser', ctrl.createUser)
app.post('/api/login', ctrl.loginUser)
app.post('/api/logout', (req, res) => { 
    req.session.destroy();
    res.status(200).send()
})
app.post('/api/createProject', ctrl.createProject)
app.post('/api/createHeader/:project_id', ctrl.createHeader)
app.post('/api/createDefaultProject', ctrl.createDefaultProject)
app.post('/api/createDefaultHeader/:project_id', ctrl.createDefaultHeader)
app.post('/api/createAbout/:project_id', ctrl.createAbout)
app.post('/api/createFeature/:project_id', ctrl.createFeature)
app.put('/api/publishProject/:project_id', ctrl.publishProject)
app.put('/api/updateHeader/:project_id', ctrl.updateHeader)
app.put('/api/updateProject/:project_id', ctrl.updateProject)
app.put('/api/updateAbout/:project_id', ctrl.updateAbout)
app.put('/api/updateFeature/:feature_component_id', ctrl.updateFeature)
app.put('/api/updateProjectWithUser/:project_id', ctrl.updateProjectWithUser)
app.put('/api/updateHeaderWithUser/:project_id', ctrl.updateHeaderWithUser)
app.put('/api/updateAboutWithUser/:project_id', ctrl.updateAboutWithUser)
app.put('/api/updateFeatureWithUser/:feature_component_id', ctrl.updateFeatureWithUser)
app.delete('/api/deleteProject/:project_id', ctrl.deleteProject)
app.delete('/api/deleteUser/:user_id', ctrl.deleteUser)
app.delete('/api/deleteAbout/:about_id', ctrl.deleteAbout)
app.delete('/api/deleteFeature/:feature_component_id', ctrl.deleteFeature)

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

// server ///////////////////////////////////////
app.listen(SERVER_PORT, () => {
    console.log(`Hey! Listen ${SERVER_PORT}`)
})
/////////////////////////////////////////////////
