var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var questionSchema = new Schema(
    {
        ID: Number,
        Event: String,
        Text: String,
        Rating: Number,
        Username: String
    });


var Question = mongoose.model('Question', questionSchema, 'Questions');

// Expose (export) the model now... for making the model available
module.exports = mongoose.model('Question', questionSchema);