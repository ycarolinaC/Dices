const mongoose = require('mongoose');
const {Schema} = mongoose;

const gameSchema = Schema({
   
    title: String,
    type: String,
    gamers : {
      "gamer1" : {"name": String},
      "gamer2": {"name": String},
      "gamer3": {"name": String} 
   }
});

module.exports =mongoose.model('game', gameSchema);