const mongoose = require('mongoose')
const Excercise = require('./excercise')

const workoutSchema = new mongoose.Schema({
    // add virtuals and options: timestamp
    // for new date, do not include specific time, or GMT
    name: {
        type: String,
        default: 'Workout: ' + new Date
    },
    date: {
        type: Date,
    },
    excercise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Excercise',
        required: false,
        // // name: String,
        // reps: {
        //     type: Number,
        //     default: 0
        // },
        // sets: {
        //     type: Number,
        //     default: 0
        // }
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Workout = new mongoose.model('Workout', workoutSchema)

module.exports = Workout