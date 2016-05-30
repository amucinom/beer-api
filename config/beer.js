var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
    name: String,
    location: String,
    abv: Number
});

module.exports = mongoose.model('Beer', BeerSchema);
