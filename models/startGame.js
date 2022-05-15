const mongoose = require('mongoose');
const {Schema} = mongoose;

const startGameSchema = Schema({
    id : String,
    gamers : {
      "gamer1" : {"name": String, "number": Number},
      "gamer2": {"name": String, "number": Number},
      "gamer3": {"name": String,"number": Number} 
   },
   status : Boolean,

});

module.exports =mongoose.model('gameStart', startGameSchema);