const mongoose = require('mongoose')
const db = require('./config/db')
const express = require('express')
const app = express()
const cors = require('cors')

const workoutRoutes = require('./routes/workout-routes')
const routineRoutes = require('./routes/routine-routes')
const userRoutes = require('./routes/user-routes')
const excerciseRoutes = require('./routes/excercise-routes') // exercise// exercise

mongoose.set('strictQuery', true)

const PORT = process.env.PORT || 3000

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})


app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://127.0.0.1:5500` }))

app.use(userRoutes)
app.use(workoutRoutes)
app.use(routineRoutes)
app.use(excerciseRoutes) // exercise


app.listen(PORT, () => {
    console.log('Server running on port 3000')
})

module.exports = app