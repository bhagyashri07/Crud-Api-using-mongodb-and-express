const mongoose = require("mongoose")

const { Schema } = mongoose;

const studentSchema = new Schema({
    fullName: {
        type: String,
     
    },
    age: {
        type: Number,
     
    },
    address: {
        type: String,
     
    },
    place: {
        type: String,
     
    },
    city: {
        type: String,
     
    },
    state: {
        type: String,
     
    },
    country: {
        type: String,
     
    },
    zipcode: {
        type: Number,
     
    },
    phone: {
        type: Number
    },
    timespan:{
     type:Date,
     default:Date.now
    }
})
module.exports = mongoose.model("students1",studentSchema)