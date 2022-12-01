const { Router } = require('express');
const { getRecentlyPlayed, createRecentlyPlayed, updateRecentlyPlayed } = require('../controllers/history.controller');

const router = Router();

router.route('/')
    .get(getRecentlyPlayed)
    .post(createRecentlyPlayed)
    .put(updateRecentlyPlayed)

module.exports = router;