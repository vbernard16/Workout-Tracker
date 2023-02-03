const mongoose = require('mongoose')

const excerciseSchema = new mongoose.Schema({ // exercise - this typo could be the source of a lot of grief 
    name: {
        type: String,
        required: [true, "Please enter a valid excercise"]// exercise
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
    ],// incorrect indentation , closes enum not 'type'
        required: false
    },
    muscle: {
        type: String,
        enum: ['abdominals', // i believe abdominal is both singular and plural, like deer 
            'abductors',
            'adductors',
            'biceps',
            'calves',
            'chest',
            'forearms',
            'glutes',
           ' hamstrings', // mind your indentation - missing a space here
            'lats',
            'lower back',
            'middle back',
            'neck',
            'quadriceps',
           ' traps', // and here
            'triceps'
        ]
    },
    instructions: {
        type: String
    }
})

const Excercise = new mongoose.model('Excercise', excerciseSchema) // exercise// exercise// exercise

module.exports = Excercise // exercise
