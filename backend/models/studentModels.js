import mongoose from 'mongoose'
import School from "./schoolModels.js"
import Subject from "./subjectModels.js"
import bcrypt from 'bcryptjs'


const studentSchema = mongoose.Schema({
    school: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: School
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    studentCode: {
        type: String,
        required: true
    },
    subjects: [String]

}, { timestamps: true })


const Student = mongoose.model('Student', studentSchema)
export default Student