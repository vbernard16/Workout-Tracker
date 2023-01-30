const mongoose = require('mongoose')
const routineSchema = require('./routine')

const workoutSchema = new mongoose.Schema({

    name: {
        type: String,
        default: 'Workout: ' + new Date
    },
    routines: [routineSchema],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Workout = new mongoose.model('Workout', workoutSchema)

module.exports = Workout