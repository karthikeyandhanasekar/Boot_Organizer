
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    city: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true, minlength: 8, maxlength: 12 },
    phoneno: { type: Number, required: true, length: 10 },
    state: { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date().valueOf() }
})

module.exports = mongoose.model('userlist', userSchema)
