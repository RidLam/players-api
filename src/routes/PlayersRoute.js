const express = require('express')
const router = express.Router()

const  { 
    getAllPlayers,
    getPlayerById
} = require('../controllers/PlayersController.js')

router.get('/', getAllPlayers);

router.get('/:player_id', getPlayerById)

module.exports = router