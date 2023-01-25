const express = require('express')
const router = express.Router()

const Workout = require('../models/workout')

// Find all/ Index
router.get('/workouts', (req, res, next) => {
    // handle404 will be first
    Workout.find()
        .then((workout) => {
            console.log(workout)
            // use correct status code
            return res.status(200).json({ workout: workout })
        })
        .catch(next)
})

// Find one/ Show
router.get('/workouts/:workoutId', (req, res, next) => {
    Workout.findById(req.params.workoutId)
        .then((workout) => {
            console.log(workout)
            return res.status(200).json({ workout: workout })
        })
        .catch(next)
})
// POST
router.post('/workouts', (req, res, next) => {
    const newWorkout = req.body.workout
    Workout.create(newWorkout)
        .then((workout) => {
            console.log(newWorkout)
            console.log(workout)
            return res.status(200).json({ workout: workout })
        })
        .catch(next)
})

// PATCH
router.patch('/workouts/:workoutId', (req, res, next) => {
    const updatedWorkout = req.body.workout
    Workout.findById(req.params.workoutId)
        .then((workout) => {
            return workout.updateOne(updatedWorkout)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE
router.delete('/workouts/:workoutId', (req, res, next) => {
    Workout.findById(req.params.workoutId)
        .then((workout) => {
            console.log(workout)
            workout.deleteOne(req.body.workout)
        })
        .then((workout) => {
            res.status(200).json({ workout: workout })
        })
        .catch(next)
})



module.exports = router