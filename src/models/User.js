const { Schema, model } = require('mongoose');
const noteSchema = new Schema({
    id: { type: String, required: true, trim: true },
    name: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String, required: false },
    topTracks: { type: Array, required: true, default: [] },
    topArtists: { type: Array, required: true, default: [] },
}, {
    timestamps: true,
    collection: 'users'
});
module.exports = model('User', noteSchema);
