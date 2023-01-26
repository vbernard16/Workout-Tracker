const mongoose = require('mongoose')

const routineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a valid routine"]
    },
    type: {
        type: String,
        enum: [
            'strength',
            "weights",
            'cardio',
            'olympic weightlifting',
            'plyometrics',
            'powerlifting',
            'stretching',
            'strongman'
    ],
        required: false
    },
    muscle: {
        type: String,
        enum: ['abdominals',
            'abductors',
            'adductors',
            'biceps',
            'calves',
            'chest',
            'forearms',
            'glutes',
           ' hamstrings',
            'lats',
            'lower back',
            'middle back',
            'neck',
            'quadriceps',
           ' traps',
            'triceps'
        ]
    },
    instructions: {
        type: String
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