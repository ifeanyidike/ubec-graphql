import mongoose from 'mongoose'
import School from '../models/schoolModels.js'
import Student from '../models/studentModels.js'
import Teacher from '../models/teacherModels.js'
import { generateToken } from '../utils/generateToken.js'

export const studentsLogin = async (parent, args) => {
    const { school, studentCode } = args

    const student = await Student.findOne({ studentCode })

    if (JSON.stringify(student.school) === school) {
        throw new Error("No such school in the database")
    }

    if (student) {
        return {
            _id: student._id,
            name: student.name,
            school: student.school,
            age: student.age,
            sex: student.sex,
            class: student.class,
            subjects: student.subjects,
            token: generateToken(student._id, process.env.JWT_SECRET, '3d')
        }
    } else {
        throw new Error('Incorrect student code')
    }

}


export const teachersLogin = async (parent, args) => {
    const { school, username, teacherCode } = args
    const ObjectId = mongoose.Types.ObjectId
    const schoolId = new ObjectId(school)

    const teacher = await Teacher.findOne({ username })

    if (teacher && (schoolId !== teacher.school)) {
        throw new Error('School is incorrect')
    }

    if (teacher && (await teacher.matchPassword(teacherCode))) {
        return {
            _id: teacher._id,
            name: teacher.name,
            username: teacher.username,
            school: teacher.school,
            class: teacher.class,
            subjects: teacher.subjects,
            token: generateToken(teacher._id, process.env.JWT_SECRET, '3d')
        }
    } else {
        throw new Error('Incorrect teacher code')
    }

}