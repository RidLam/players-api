const express = require('express')
const router = express.Router()

const  { 
    getAllPlayers
} = require('../controllers/PlayersController.js')

router.get('/', getAllPlayers);


module.exports = router