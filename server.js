const mongoose = require('mongoose')
const db = require('./config/db')
const express = require('express')
const app = express()

const workoutRoutes = require('./routes/workout-routes')
const excerciseRoutes = require('./routes/excercise-routes')
const userRoutes = require('./routes/user-routes')

mongoose.set('strictQuery', true)

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

app.use(express.json())


app.use(workoutRoutes)
app.use(excerciseRoutes)
app.use(userRoutes)



















app.listen(3000, () => {
    console.log('Server running on port 3000')
})

module.exports = app