const historyCtrl = {};
const History = require('../models/History');

historyCtrl.getRecentlyPlayed = async (req, res) => {
    const tracks = await History.find().limit(req.query.limit);
    res.json(tracks);
};
historyCtrl.updateRecentlyPlayed = async (req, res) => {
    const { id_user, tracks } = req.body;
    await History.findOneAndUpdate(
        { id_user: id_user },
        { tracks },
        { new: true, upsert: true, setDefaultsOnInsert: true },
    ).clone().catch(err => res.json({ error: err }));
    res.json({ message: 'History updated' });
};

module.exports = historyCtrl;
