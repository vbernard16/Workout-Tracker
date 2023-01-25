const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: String
},
{
    timestamps: true,
    toJson: {
        virtuals: true,
        transform: (_doc, user) => {
            delete user.password
            return user
        }
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User