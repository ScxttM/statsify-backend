const { Router } = require('express');
const { getRecentlyPlayed, updateRecentlyPlayed } = require('../controllers/history.controller');

const router = Router();

router.route('/')
    .get(getRecentlyPlayed)
    .put(updateRecentlyPlayed)

module.exports = router;