const mongoose = require('mongoose');
const {Schema} = mongoose;
const JobGiverSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});
// //This will add user only if it is unique email
// User.createIndexes();
const JobGiver = mongoose.model('jobGiver', JobGiverSchema);
module.exports = JobGiver