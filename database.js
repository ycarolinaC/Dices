const mongoose = require("mongoose")

const URI = "mongodb+srv://admin:1234@cluster0.ip1k5.mongodb.net/gamedicesf?retryWrites=true&w=majority";
//database conection 
const mongooose = mongoose.connect(
    URI,
    { useUnifiedTopology: true })
    .then(db=> console.log('DB is connected'))
    .catch(err => console.log(err));
module.exports = mongooose;


