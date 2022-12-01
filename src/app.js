const express = require('express');
const cors = require('cors');
const app = express();
const refreshAccessToken = require("./refreshAccessToken");
const clientUrl = process.env.REACT_APP_CLIENT_URL;
var credentials = [];

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.get('/login', require("./authorizeSpotify"));
app.get('/login/callback', require("./getAccessToken"), (req, res, next) => {
    if (req.credentials) {
        credentials = req.credentials;
        // res.redirect(`${clientUrl}/?authorized=true&access_token=${req.credentials.access_token}&refresh_token=${req.credentials.refresh_token}`);
        res.json(credentials);
    } else {
        res.redirect(`${clientUrl}/login/callback?failed`);
    }
});
app.get('/refresh_token', (req, res, next) => {
    refreshAccessToken(credentials.refresh_token).then(data => {
        if (data.access_token) {
            credentials.access_token = data.access_token;
            res.json(credentials);
        } else {
            res.json({ error: "Could not refresh access token" });
        }
    });
});
app.use('/api/history', require("./routes/history"));
app.use('/api/tracks', require("./routes/tracks"));

module.exports = app;