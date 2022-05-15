const express = require('express');
const router = express.Router();
const Game = require('../models/game')
const startGame = require('../models/startGame')
const {mongooose} = require('../database');
const {getAllGames,postCreateGame,postGameS,getGameEnd,getWinner} = require('../controllers/game.controller')

/*router.get('/games',async (req,res)=> {
    const game = await Game.find();
    //console.log(game)
    res.json(game)
});*/
router.get('/games',getAllGames);
router.get('/games/:id', getGameEnd)
router.post('/createGame', postCreateGame )

//router.post('/games/:id', postGameS)

router.post('/startGame/:id', postGameS)

router.get('/games/:id/winner', getWinner)
/*router.post('/games/627ee200cdbef1662cc2644a',async(req,res) =>{

    //res.send("only game")
    const gamers = Game.findById(req.params.id);
    gamers.then((result)=>{
        const gamer1 = result.gamers[0];
        const gamer2 = result.gamers[1];
        const gamer3 = result.gamers[2];

        const gameS = new startGame({
            id : result.id,
            
            gamers : {
                "gamer1": {"name" : gamer1, "number": n1},
                "gamer2": {"name" : gamer2, "number": n2},
                "gamer3": {"name" : gamer3, "number": n3}
            },
            status:true
        })
        /*await gameS.save();
        res.json({gameS})
    })
});*/



module.exports = router;