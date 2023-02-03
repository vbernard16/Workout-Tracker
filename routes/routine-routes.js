const express = require('express')
const { requireToken} = require('../config/auth')
const router = express.Router()
const handle404 = require('../lib/custom-errors')
const Workout = require('../models/workout')

// can't help but feel all of these routes should have been /:workoutId/routines/.... free's you up to change the ref back to pointing at exercise and avoids the messy many to many circular ref you have going on 
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
    console.log(req.body)
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
// no delete for routines yet ? 
module.exports = router