const express = require('express')
const router = express.Router()

const Excercise = require('../models/excercise')

// Find all/ Index
router.get('/excercises', (req, res, next) => {
    // handle404 will be first
    Excercise.find()
        .then((excercise) => {
            console.log(excercise)
            // use correct status code
            return res.status(200).json({ excercise: excercise })
        })
        .catch(next)
})

// Find one/ Show
router.get('/excercises/:excerciseId', (req, res, next) => {
    Excercise.findById(req.params.excerciseId)
        .then((excercise) => {
            console.log(excercise)
            return res.status(200).json({ excercise: excercise })
        })
        .catch(next)
})
// POST
router.post('/excercises', (req, res, next) => {
    const newExcercise = req.body.excercise
    Excercise.insertMany(newExcercise)
        .then((excercise) => {
            console.log(newExcercise)
            console.log(excercise)
            return res.status(200).json({ excercise: excercise })
        })
        .catch(next)
})

router.delete('/excercises', (req, res, next) => {
    Excercise.deleteMany()
        .then((excercise) => {
            res.status(200).json({ excercise: excercise })
        })
        .catch(next)
})

module.exports = router