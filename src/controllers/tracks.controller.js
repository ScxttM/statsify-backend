const tracksCtrl = {};
const Track = require('../models/Track');

tracksCtrl.getTracks = async (req, res) => {
    const tracks = await Track.find().limit(req.query.limit);
    res.json(tracks);
};
tracksCtrl.getTrack = async (req, res) => {
    const track = await Track.findById(req.params.id);
    res.json(track);
};
tracksCtrl.updateTrack = async (req, res) => {
    const { id_track, name, artists, album, rating } = req.body;
    await Track.findOneAndUpdate(
        { id_track: id_track },
        {
            name: name,
            artists: artists,
            album: album,
            rating: rating
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
    ).catch(err => res.json({ error: err }));
    res.json({ message: 'Track updated' });
}
tracksCtrl.getTracksRated = async (req, res) => {
    const tracks = await Track.find({ rating: { $gt: 0 } }).limit(50);
    res.json(tracks);
}
tracksCtrl.updateTracks = async (req, res) => {
    const { tracks } = req.body;
    await Track.insertMany(tracks, { ordered: false }).catch(err => res.json({ error: err }));
    res.json({ message: 'Tracks updated' });
}

module.exports = tracksCtrl;

