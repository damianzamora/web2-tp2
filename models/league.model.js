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
    openingDate: {
        type:Date
    },
    
    participantNumber: {
        type: Number
    }
})

module.exports = mongoose.model("League", leagueSchema)