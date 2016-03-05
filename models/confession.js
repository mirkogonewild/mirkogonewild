var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var confessionSchema = new Schema({
    text: String,
    embed: String,
    entryID: Number,
    accepted: {type: Boolean, default: false}
});

module.exports = mongoose.model('confessions', confessionSchema);