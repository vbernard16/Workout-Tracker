const mongoose = require('mongoose')

const excerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a valid excercise"]
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
    }
})

const Excercise = new mongoose.model('Excercise', excerciseSchema)

module.exports = Excercise

