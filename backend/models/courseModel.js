const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema(
    {
        "title": { type: String, unique: true, required:true},
        "level": { type: String },
        "createdAt" : {type : Date, default: Date.now}
    }
)
mongoose.exports = mongoose.model("course",courseSchema)