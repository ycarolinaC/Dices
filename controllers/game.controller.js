const Game = require('../models/game')
const startGame = require('../models/startGame')
const endGame = require('../models/gamePlay')
const winner = require('../models/winner')
const {mongooose} = require('../database');
const { default: mongoose } = require('mongoose');

const getAllGames = async(req,res) =>{
    try{
        const game = await Game.find();
        res.json(game)
    }catch(err){
        res.status(500).json({ message: err });
    }
    
}


const postCreateGame = async(req, res)=>{try{
    const {title, type,gamers} = req.body;
    const game = new Game({
        title,
        type,
        gamers
    })
    await game.save();
    res.json({game})
}catch(err){
    res.status(500).json({ message: err });
 }   
}

n1 = Math.floor(Math.random()*6)+1;
n2 = Math.floor(Math.random()*6)+1;
n3 = Math.floor(Math.random()*6)+1;
let numberWinner;
numberWinner = Math.max(n1,n2,n3)

 const postGameS = async(req,res) =>{
    const {id} = req.params
    const result = await Game.findById(id);
    
    g1 = result.gamers.gamer1.name
    g2 = result.gamers.gamer2.name
    g3 = result.gamers.gamer3.name
    
    if (numberWinner === n1){
        nameWinner = g1
    }else if(numberWinner === n2){
        nameWinner = g2
    }else if(numberWinner === n3){
        nameWinner = g3
    }
    const gameS = new startGame({
        id : result.id, 
        gamers : {
            "gamer1": {"name" : g1, "number": n1},
            "gamer2": {"name" : g2, "number": n2},
            "gamer3": {"name" : g3, "number": n3}
        },
        status: true        
    })
    await gameS.save();
    const gameT = new endGame({
        id : result.id, 
        gamers : {
            "gamer1": {"name" : g1, "number": n1},
            "gamer2": {"name" : g2, "number": n2},
            "gamer3": {"name" : g3, "number": n3}
        },
        status:false,
        winner : {"name": nameWinner, "number":numberWinner}
        
    })
    res.json(gameT)
    await gameT.save();
    const gamerWinner = new winner({
        id : result.id, 
        gamerW : {"name": nameWinner, "number":numberWinner}
    })
    await gamerWinner.save();
}

const getGameEnd = async(req,res) =>{ 
    try{
        const {id} = req.params
        //const gameT = await endGame.findById(id);
        const gameT = await endGame.findOne({id:req.params.id});
        res.json(gameT)
    }catch(err){
        res.status(500).json({ message: err });
    }
}

const getWinner = async(req, res) =>{
    try{
        const gamerW = await winner.findOne({id:req.params.id});
        res.json(gamerW)
    }catch(err){
        res.status(500).json({ message: err });
    }
}
module.exports = {
    getAllGames,
    postCreateGame,
    postGameS,
    getGameEnd,
    getWinner
}