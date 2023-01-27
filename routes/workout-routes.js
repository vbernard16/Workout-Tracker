const express = require('express')
const router = express.Router()
const { requireToken } = require('../config/auth')
const handle404 = require('../lib/custom-errors')

const Workout = require('../models/workout')

// Find all/ Index
router.get('/workouts', requireToken, (req, res, next) => {
    const userId = req.user._id
    // const userWorkout = workout.userId
    console.log(`user's workout: ${req.user}`)
    // console.log(`owner: ${req.owner}`)
    // console.log(`user: ${req.user}`)
    // console.log(req.body.workout)
    // console.log(`user Id: ${userId}`)
//    console.log(req.user)
    const workouts = req.body.workout
    console.log(workouts)
    // workouts.owner = userId
    Workout.find()
        .then(handle404)
        .then((workout) => {
            // use correct status code
            return res.status(200).json({ workout: workout })
        })
        .catch(next)
})

// Find one/ Show
router.get('/workouts/:workoutId', requireToken, (req, res, next) => {
    Workout.findById(req.params.workoutId)
        .then(handle404)
        .then((workout) => {
            return res.status(200).json({ workout: workout })
        })
        .catch(next)
})
// POST
router.post('/workouts', requireToken, (req, res, next) => {
    // console.log(req.user)
    const userId = req.user._id
    const newWorkout = req.body.workout
    newWorkout.owner = userId
    console.log(`userId: ${userId}`)
    console.log(`newWorkout.owner: ${newWorkout.owner}`)
    Workout.create(newWorkout)
        .then(handle404)
        .then((workout) => {
            return res.status(200).json({ workout: workout })
        })
        .catch(next)
})

// PATCH
router.patch('/workouts/:workoutId', requireToken, (req, res, next) => {
    const updatedWorkout = req.body.workout
    Workout.findById(req.params.workoutId)
        .then(handle404)
        .then((workout) => {
            return workout.updateOne(updatedWorkout)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE
router.delete('/workouts/:workoutId', requireToken, (req, res, next) => {
    Workout.findById(req.params.workoutId)
        .then(handle404)
        .then((workout) => {

            workout.deleteOne(req.body.workout)
        })
        .then((workout) => {
            res.status(200).json({ workout: workout })
        })
        .catch(next)
})



module.exports = router