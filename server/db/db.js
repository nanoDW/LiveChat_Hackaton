const mongoose = require('mongoose');
const config = require('../config/default.json');

module.exports = function () {
    const db = config.db;
    mongoose.connect(db, {
            useNewUrlParser: true,
            dbName: "hackathon-app"
        })
        .then(() => console.log('Connected to MongoDB...'))
        .catch(err => console.error('Could not connect to MongoDB...', err));
}