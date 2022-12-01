const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    id_user: { type: String, required: true, trim: true },
    display_name: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true },
    images: { type: Array, required: false },
    user_url: { type: String, required: true },
}, {
    timestamps: true,
    collection: 'users'
});
module.exports = model('User', userSchema);
