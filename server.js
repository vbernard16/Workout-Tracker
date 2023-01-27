const mongoose = require('mongoose')
const db = require('./config/db')
const express = require('express')
const app = express()
const cors = require('cors')

const workoutRoutes = require('./routes/workout-routes')
const routineRoutes = require('./routes/routine-routes')
const userRoutes = require('./routes/user-routes')
const excerciseRoutes = require('./routes/excercise-routes')

mongoose.set('strictQuery', true)

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

app.use(cors({ origin: `http://127.0.0.1:5500` }))

app.use(express.json())


app.use(workoutRoutes)
app.use(routineRoutes)
app.use(userRoutes)
app.use(excerciseRoutes)


















app.listen(3000, () => {
    console.log('Server running on port 3000')
})

module.exports = app