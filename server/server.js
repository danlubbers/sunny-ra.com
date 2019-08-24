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
    , path = require('path')


// •••••••••••••••• PROCESS.ENV •••••••••••••••• //

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


// •••••••••••••••• ENDPOINTS •••••••••••••••• //

app.get(`/api/getAllHomeImages`, controller.homeImages)
app.get(`/api/getImages/:category`, controller.allImages)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './../build', 'index.html'))
})

// •••••••••••••••• CONNECTION_STRING && SERVER_PORT•••••••••••••••• //

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, _ => {
        console.log(`Everything is running on PORT: ${SERVER_PORT}`)})
})