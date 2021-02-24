import mongoose from 'mongoose'
import School from "./schoolModels.js"
import Subject from "./subjectModels.js"
import bcrypt from 'bcryptjs'

const subjectSchema = mongoose.Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Subject
    }
})

const teacherSchema = mongoose.Schema({
    school: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: School
    },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    teacherCode: {
        type: String,
        required: true
    },
    subjects: [subjectSchema]

})


//compare password and match it with the entered one
teacherSchema.methods.matchPassword = async function (enteredTeacherCode) {
    return await bcrypt.compare(enteredTeacherCode, this.teacherCode)
}

//hash the password. Pre runs before the model.
teacherSchema.pre('save', async function (next) {
    if (!this.isModified('teacherCode')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.teacherCode = await bcrypt.hash(this.teacherCode, salt)
})

const Teacher = mongoose.model('Teacher', teacherSchema)
export default Teacher