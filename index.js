const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mongooose} = require('./database');
const app = express();
//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use(require('./routes/game.routes'))
// Static files
console.log(path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname,'public')))
//Startin the server
app.listen(app.get('port'), () => {
    console.log(`Server on ${app.get('port')}`)
})
