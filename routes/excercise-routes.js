const express = require('express')
const { requireToken } = require('../config/auth')
const router = express.Router()
const handle404 = require('../lib/custom-errors')


const Excercise = require('../models/excercise')


router.get('/excercises', (req, res, next) => {
    Excercise.find()
        .then(handle404)
        .then((excercise) => {
            console.log(excercise)
            // use correct status code
            return res.status(200).json({ excercise: excercise })
        })
        .catch(next)
})


router.get('/excercises/:excerciseId', (req, res, next) => {
    Excercise.findById(req.params.excerciseId)
        .then(handle404)
        .then((excercise) => {
            console.log(excercise)
            return res.status(200).json({ excercise: excercise })
        })
        .catch(next)
})

router.post('/excercises', (req, res, next) => {
    const input = req.body.excercise
    Excercise.create(input)
        .then(handle404)
        .then((excercise) => {
           return res.status(200).json({ excercise: excercise })
        })
        .catch(next)
})

module.exports = router