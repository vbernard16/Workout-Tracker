const express = require('express')
const bcrypt = require('bcrypt')
const saltRounds = 10

const User = require('../models/user')
const { createUserToken } = require('../config/auth')

const router = express.Router()

router.post('/sign-up', (req, res, next) => {
    bcrypt.hash(req.body.credentials.password, saltRounds)
        .then(hashedPassword => {
            return {
                username: req.body.credentials.username,
                password: hashedPassword
            }
        })
        .then(user => User.create(user))
        .then(user => {
            res.status(201).json({ user: user })
        })
        .catch(next)
})

router.post('/sign-in', (req, res, next) => {
    User.findOne({username: req.body.credentials.username})
        .then((user) => createUserToken(req, user))
        .then(token => res.json({ token: token }))
        .catch(next)
})

module.exports = router