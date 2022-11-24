const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb+srv://admin:Alan2001@statsify.layhxk7.mongodb.net/statsify?retryWrites=true&w=majority';
mongoose.connect(URI, {
    useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB is connected');
});