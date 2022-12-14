const { Schema, model } = require('mongoose');
const historySchema = new Schema({
    id_user: { type: String, required: true, trim: true },
    tracks: { type: Array, required: true, default: [] },
}, {
    timestamps: true,
    collection: 'history'
});
module.exports = model('History', historySchema);