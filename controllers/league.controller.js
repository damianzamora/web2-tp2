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

async function deleteLeague(req,res){

    try {
        const id = req.params.id
        const deletedLeague = await League.findByIdAndDelete(id)

        if(!deletedLeague){
            return res.status(404).send({
                ok:false,
                message:"No se encontró la liga para borrar"
            })
        }

        res.status(200).send({
            ok:true,
            message: "Liga borrada correctamente",
            deletedLeague
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok:false,
            message: "Hubo un error al eliminar la liga"
        })
    }

}

module.exports = {
    getLeagues,
    postLeague,
    deleteLeague
}