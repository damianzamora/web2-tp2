const League = require ('../models/league.model')

async function getLeagues(req, res){
    try {
        const leagues = await League.find()
        res.status(200).send({
            ok:true,
            message: "Ligas obtenidas correctamente",
            leagues
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok:false,
            message: "Error al obtener las ligas"
        })
    }
}

async function postLeague(req, res){
    try {
        const league = new League(req.body)
        const newLeague = await league.save()
        res.status(201).send(newLeague)
    } catch (error) {
        res.status(500).send("Error al crear liga")
        console.log(error)
    }
}

module.exports = {
    getLeagues,
    postLeague
}