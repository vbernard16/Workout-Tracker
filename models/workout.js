const mongoose = require('mongoose')
const routineSchema = require('./routine')
// possibly rename routine
const workoutSchema = new mongoose.Schema({
    // add virtuals and options: timestamp
    // for new date, do not include specific time, or GMT
    name: {
        type: String,
        default: 'Workout: ' + new Date
    },
    days: String,
    routines: [routineSchema],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Workout = new mongoose.model('Workout', workoutSchema)

module.exports = Workout