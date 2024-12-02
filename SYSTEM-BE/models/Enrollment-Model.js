const mongoose = require("mongoose");

// Schema/Blueprint of DATA
const enrollmentSchema = new mongoose.Schema({
    userID: String ,
    enrolledCourse: [
        {
            courseID: String
        }
    ],
    totalPrice: Number,
    enrolledOn: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "enrolled"
    }
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);