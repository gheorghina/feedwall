var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema(
    {
        ID: Number,
        Code: String,
        Title: String,
        Description: String,
        Status: String  // {'Active', 'Closed'}
    });
     
// Build a model from the event schema…
var Event = mongoose.model('Event', eventSchema, 'Events');

// Expose (export) the model now... for making the model available
module.exports = mongoose.model('Event', eventSchema);
