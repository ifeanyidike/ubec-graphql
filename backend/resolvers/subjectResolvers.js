import Subject from "../models/subjectModels.js"

export const getAllSubjects = async () => {
    const subjects = Subject.find({})
    if (subjects) {
        return subjects
    } else {
        throw new Error("Subjects not found")
    }
}

export const getASubject = async (parent, args) => {
    const subject = Subject.findById(args._id)

    if (subject) {
        return subject
    } else {
        throw new Error("Subject not found")
    }
}

export const getSubjectByName = async (parent, args) => {
    const subject = Subject.findOne({ name: args.name })
    if (subject) {
        return subject
    } else {
        throw new Error("Subject not found")
    }
}
export const createSubject = async (parent, args) => {
    const subject = new Subject({
        name: args.name
    })
    const createdSubject = await subject.save()
    return createdSubject
}