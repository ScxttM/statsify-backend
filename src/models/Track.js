const { Schema, model } = require('mongoose');
const trackSchema = new Schema({
    id_track: { type: String, required: true, trim: true },
    name: { type: String, required: true },
    artists: { type: Array, required: true },
    album: { type: String, required: true },
    rating: { type: Number, required: false, default: 0 },
}, {
    timestamps: true,
    collection: 'tracks'
});

module.exports = model('Track', trackSchema);