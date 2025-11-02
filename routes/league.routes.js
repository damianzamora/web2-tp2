const express = require('express');
const router = express.Router();

const leagueController = require('../controllers/league.controller')

//GET All leagues
router.get("/leagues", leagueController.getLeagues)

//POST league
router.post("/league", leagueController.postLeague)

module.exports = router;