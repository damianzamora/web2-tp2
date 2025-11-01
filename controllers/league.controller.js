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

        //Devolvemos una respuesta con un codigo 500 de internal error
        res.status(500).send({
            ok:false,
            message: "Error al obtener las ligas"
        })
    }
}

module.exports = {
    getLeagues
}