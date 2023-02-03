const express = require('express')
const { requireToken } = require('../config/auth') // unused import 
const router = express.Router()
const handle404 = require('../lib/custom-errors')


const Excercise = require('../models/excercise')  // and teh miss spelling on exercise is propagated throughout the entire app

// rest of the app uses 1 space in between, here you use 2 pick one and stick with it
router.get('/excercises', (req, res, next) => { // not authenticated
    const muscleInput = ``
    Excercise.find({muscle: muscleInput}) // does this return all of your exercises ? , if you wanted all the exercises in the db pass {}
        .then(handle404)
        .then((excercise) => {
            return res.status(200).json({ excercise: excercise })
        })
        .catch(next)
})


router.get('/excercises/:excerciseId', (req, res, next) => { // not authenticated
    Excercise.findById(req.params.excerciseId)
        .then(handle404)
        .then((excercise) => {
            return res.status(200).json({ excercise: excercise })
        })
        .catch(next)
})

router.post('/excercises', (req, res, next) => { // not authenticated
    const input = req.body.excercise
    Excercise.create(input)
        .then(handle404)
        .then((excercise) => {
           return res.status(200).json({ excercise: excercise })// indentation is off by a space, 
        })
        .catch(next)
})

module.exports = router