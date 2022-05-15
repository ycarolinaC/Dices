const mongoose = require('mongoose');
const {Schema} = mongoose;

const endGameSchema = Schema({
    id : String,
    gamers : {
      "gamer1" : {"name": String, "number": Number},
      "gamer2": {"name": String, "number": Number},
      "gamer3": {"name": String,"number": Number} 
   },
   status : Boolean,
   winner: 
    {id : String, "name": String}

});

module.exports =mongoose.model('gameEnd', endGameSchema);