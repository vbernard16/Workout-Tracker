const mongoose = require('mongoose')

const routineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a valid routine"]
    },
    reps: {
        type: Number,
        default: 0
    },
    sets: {
        type: Number,
        default: 0
    },
    workout: { // i think you wanted this to point at exercise, no ? routine is a subdocument of workout already which makes sense because YOUR routine of the same exercise vs mine will be different doing this creates a very weird many to many relationship mess where one workout can have a routine which points to another workout etc. 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout'
    }
})



module.exports = routineSchema

// make this a subdocument instead, and reference it in the workout model