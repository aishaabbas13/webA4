var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongodb = 'mongodb://ayesha:perwaiz@ds213209.mlab.com:13209/moviedb';
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Review schema
var ReviewSchema = new Schema({
    reviewer: {type: String, required: true},
    movie: {type: String, required: true},
    quote: {type: String, required: true},
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    }
});

// return the model
module.exports = mongoose.model('Review', ReviewSchema);