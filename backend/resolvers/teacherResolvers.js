import School from '../models/schoolModels.js'
import Teacher from '../models/teacherModels.js'
import Subject from '../models/subjectModels.js'

export const getAllTeachers = async () => {
    const teachers = Teacher.find({})
    if (teachers) {
        return teachers
    } else {
        throw new Error("Teachers not found")
    }
}

export const getATeacher = async (parent, args) => {
    const teacher = Teacher.findById(args._id)

    if (teacher) {
        return teacher
    } else {
        throw new Error("Teacher not found")
    }
}

export const createTeacher = async (parent, args) => {
    const { school, name, username, class: teacherClass, teacherCode, subjects } = args
    const schoolObj = await School.findById(school)

    if (!schoolObj) {
        return 'School does not exist'
    }

    const teacher = new Teacher({
        school,
        name,
        username,
        class: teacherClass,
        teacherCode,
        subjects
    })
    const createdTeacher = await teacher.save()
    return createdTeacher
}

export const updateTeacher = async (parent, args) => {
    const { _id, school, name, username, class: teacherClass, teacherCode, subjects } = args
    const teacher = await Teacher.findById(_id)

    if (school) {
        const schoolObj = await School.findById(school)

        if (!schoolObj) {
            return 'School does not exist'
        }
    }

    if (teacher) {
        teacher.school = school || teacher.school
        teacher.name = name || teacher.name
        teacher.username = username || teacher.username
        teacher.class = teacherClass || teacher.class
        teacher.teacherClass = teacherCode || teacher.teacherCode
        teacher.subjects = subjects || teacher.subjects
    } else {
        throw new Error("Teacher not found")
    }

    const updatedTeacher = await teacher.save()
    return updatedTeacher
}