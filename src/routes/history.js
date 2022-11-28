const { Router } = require('express');
const { getRecentlyPlayed } = require('../controllers/history.controller');

const router = Router();

router.route('/')
    .get(getRecentlyPlayed(credentials.access_token));

module.exports = router;