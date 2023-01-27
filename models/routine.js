const mongoose = require('mongoose')

const routineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a valid routine"]
    },
    type: {
        type: String,
        required: false
    },
    muscle: {
        type: String,
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

// const Routine = new mongoose.model('Routine', routineSchema)

module.exports = routineSchema

// make this a subdocument instead, and reference it in the workout model