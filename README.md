# Players ranking API

The aim of this project is to create a REST API to get players from an external API

## Technologies
To develop this API I used the following technologies:
- NodeJS: v14.17.4
- ExpressJS: 4.17.2


## Installation
In order to run the project please run the following commands:
```
npm install
npm start
```

## Usage
I have created two API, one API to get all players and another one to get player by id.

Base URL : [http://localhost:8080/](http://localhost:8080/)

- Get all players : [/api/players](http://localhost:8080/api/players)
- Get player by id : [/api/players/:id](http://localhost:8080/api/players/1)

## Cloud deployment
I used Heroku to deploy the REST API, please check out the following links to test the app.
- Get all players : [https://players-ranking.herokuapp.com/api/players/](https://players-ranking.herokuapp.com/api/players/)
- Get player with id 52 : [https://players-ranking.herokuapp.com/api/players/52](https://players-ranking.herokuapp.com/api/players/52)
