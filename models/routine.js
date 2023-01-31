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
    workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout'
    }
})



module.exports = routineSchema

// make this a subdocument instead, and reference it in the workout model