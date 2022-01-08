const axios = require('axios')

const getAllPlayers = (async (req, res) => {
  try {
    const players = await getPlayers();
    res.status(200).json(players)
  } catch (error) {
    res.status(402).json(error)
  }
})

const getPlayerById = (async (req, res) => {
  try {
    const { player_id } = req.params;
    const players = await getPlayers();
    const player = players.find(_player => _player.id === parseInt(player_id));
    if (player) {
      res.status(200).json(player);
    } else {
      throw `Sorry, player with id : ${player_id} not found`;
    }
    
  } catch (error) {
    res.status(402).json(error);
  }
  
})

const getPlayers = () =>
  new Promise((resolve, reject) => {
    axios.get(process.env.EXTERNAL_PLAYERS_API)
    .then(result => {
      if (result && result.data && result.data.players) {
        resolve(result.data.players);
      } else {
        resolve([]);
      }
    })
    .catch(error => {
      reject(error);
    });
  })


module.exports = {
    getAllPlayers,
    getPlayerById
}