var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongodb = 'mongodb://ayesha:perwaiz@ds213209.mlab.com:13209/moviedb';
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Movie schema
var MovieSchema = new Schema({
    title: { type: String, required: true },
    year: {
        type: Number,
        min: 1880,
        max: 2018,
        required: true
    },
    genre: {
        type: String,
        enum: ['Action','Adventure', 'Comedy',
            'Drama','Fantasy','Horror', 'Mystery',
            'Thriller', 'Western'],
        required: true
    },
    actors: {
        type: [{
            actorName: {type: String, required: true},
            characterName: {type: String, required: true}
        }], required: true
    },
    image: {
        type: String
    }
});


// return the model
module.exports = mongoose.model('Movie', MovieSchema);