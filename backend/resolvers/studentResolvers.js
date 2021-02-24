import School from '../models/schoolModels.js'
import Student from '../models/studentModels.js'
import Subject from '../models/subjectModels.js'

export const getAllStudents = async () => {
    const students = Student.find({})
    if (students) {
        return students
    } else {
        throw new Error("Students not found")
    }
}

export const getAStudent = async (parent, args) => {
    const student = Student.findById(args._id)

    if (student) {
        return student
    } else {
        throw new Error("Student not found")
    }
}

export const createStudent = async (parent, args) => {
    const { school, name, age, sex, class: studentClass, studentCode, subjects } = args
    const schoolObj = await School.findById(school)
    const existStudent = await Student.findOne({ studentCode })

    if (existStudent) {
        throw new Error('Student already exists')
    }

    if (!schoolObj) {
        throw new Error('School does not exist')
    }

    const student = new Student({
        school,
        name,
        age,
        sex,
        class: studentClass,
        studentCode,
        subjects
    })
    const createdStudent = await student.save()
    return createdStudent
}

export const updateStudent = async (parent, args) => {
    const { _id, school, name, sex, age, class: studentClass, studentCode, subjects } = args
    const student = await Student.findById(_id)

    if (school) {
        const schoolObj = await School.findById(school)

        if (!schoolObj) {
            throw new Error('School does not exist')
        }
    }

    if (student) {
        student.school = school || student.school
        student.name = name || student.name
        student.age = age || student.age
        student.sex = sex || student.sex
        student.class = studentClass || student.class
        student.studentClass = studentCode || student.studentCode
        student.subjects = subjects || student.subjects
    } else {
        throw new Error("Student not found")
    }

    const updatedStudent = await student.save()
    return updatedStudent
}