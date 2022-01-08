const axios = require('axios')

const getAllPlayers = (async (req, res) => {
    res.status(200).json("Hello world")
})

module.exports = {
    getAllPlayers
}