const { Router } = require('express');
const { getTracks, getTrack, updateTrack, getTracksRated, updateTracks } = require('../controllers/tracks.controller');

const router = Router();

router.route('/')
    .get(getTracks)
    .put(updateTracks)
router.route('/:id')
    .get(getTrack)
    .put(updateTrack)
router.route('/rated')
    .get(getTracksRated)

module.exports = router;
