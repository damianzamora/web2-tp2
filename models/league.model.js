const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        minLength: 3, 
        maxLength: 40,
        trim: true /* Evitamos espacios en principio y final */
    },
    sport: {
        type: String, 
        required: true, 
        minLength: 3, 
        maxLength: 40,
        trim: true /* Evitamos espacios en principio y final */
    },
    country: {
        type: String, 
        required: true,
        trim: true /* Evitamos espacios en principio y final */
    },
    openingDate: Date ,    
    participantNumber: {
        type: Number,
        required: true 
}}, {
  versionKey: false // ocultar parametro "__v" globalmente
})

module.exports = mongoose.model("League", leagueSchema)