# Express-LB - Engine Agnostic
A leaderboard for video games made in expressjs. Pretty simple Rest API for video games that can be used in any engine.

###API

- /api/players/:count_num - get - returns an array of players
- /api/player - post - create a player to the database with its score. returns 'success' with player information
- /api/players/:player_name - get  - a single player. returns 'success' with player information
- /api/players/:player_name - put - update a player with new info. returns 'success'
- /api/players/:player_name - delete - delete a new player. returns 'success'

Everything will return a JSON object.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
