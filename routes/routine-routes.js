const express = require('express')
const { requireToken} = require('../config/auth')
const router = express.Router()
const handle404 = require('../lib/custom-errors')
const Workout = require('../models/workout')



// POST


router.post('/routines', requireToken, (req, res, next) => {
    const workoutId = req.body.routine.workoutId
    const routineInput = req.body.routine
    routineOwner = req.user._id
    Workout.findById(workoutId)
        .then(handle404)
        .then((workout) => {
            workout.routines.push(routineInput)
            return workout.save()
        })
        .then((workout) => {
            res.status(201).json({ workout: workout })
        })
        .catch(next)
})


router.patch('/routines/:routineId', requireToken, (req, res, next) => {
    const workoutId = req.body.routine.workoutId
    const routineInput = req.body.routine

    Workout.findById(workoutId)
        .then(handle404)
        .then((workout) => {
            const routine = workout.routines.id(req.params.routineId)
            routine.set(routineInput)
            return workout.save()
        })
        .then((workout) => {
            res.status(200).json({ workout: workout })
        })

})
module.exports = router