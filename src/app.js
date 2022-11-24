const express = require('express');
const cors = require('cors');
const app = express();
const authorizeSpotify = require("./authorizeSpotify");
const getAccessToken = require("./getAccessToken");
const refreshAccessToken = require("./refreshAccessToken");
const clientUrl = process.env.REACT_APP_CLIENT_URL;

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.get('/login', authorizeSpotify);
app.get('/login/callback', getAccessToken, (req, res, next) => {
    if (req.credentials) {
        res.redirect(`${clientUrl}/?authorized=true&access_token=${req.credentials.access_token}&refresh_token=${req.credentials.refresh_token}`);
    } else {
        res.redirect(`${clientUrl}/failed`);
    }
});

module.exports = app;