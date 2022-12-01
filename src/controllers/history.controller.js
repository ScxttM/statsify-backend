const historyCtrl = {};
const History = require('../models/History');

historyCtrl.getRecentlyPlayed = (req, res) => {
    res.json(tracks);
};
historyCtrl.createRecentlyPlayed = (req, res) => res.json({ message: 'createRecentlyPlayed' });
historyCtrl.updateRecentlyPlayed = (req, res) => res.json({ message: 'updateRecentlyPlayed' });

module.exports = historyCtrl;
