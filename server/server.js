require('dotenv').config()

const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , massive = require('massive')
    , session = require('express-session')
    , passport = require('passport')
    , app = new express()
    , router = express.Router()

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

app.use(bodyParser.json())
app.use(cors())

// Allows use of Sessions
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
// Interact with sessions
app.use(passport.session());

// This is for the NPM RUN BUILD
app.use(express.static(__dirname + '/../build'))
app.use(router)

app.get(`/api/getAllHomeImages`, controller.homeImages)


// Port
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, _ => {
        console.log(`Everything is running on PORT: ${SERVER_PORT}`)})
})