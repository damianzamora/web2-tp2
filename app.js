const express = require('express')
const app = express();

//const teams_routes = require('./routes/teams.routes')

app.use(express.json()) 

//app.use("/api", [teams_routes]) 

module.exports = app; 