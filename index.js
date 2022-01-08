const express = require('express');
const cors = require('cors');
require('dotenv').config();
const players_route = require('./src/routes/PlayersRoute');

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started at port : ${PORT}`)
})

process.on('uncaughtException', function (err) {
  console.log(err);
}); 

app.use(cors());
app.options('*', cors());
app.use(express.json())
app.use('/api/players', players_route)