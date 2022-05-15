const mongoose = require('mongoose');
const {Schema} = mongoose;

const winnerSchema = Schema({
   
    id: String,
    gamerW : {"name": String,"number":Number}
});

module.exports =mongoose.model('winner', winnerSchema);