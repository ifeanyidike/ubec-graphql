import Question from "../models/questionModels.js"
import Subject from "../models/subjectModels.js"

export const getAllAssessments = async () => {
    const questions = await Question.find({})
    if (questions) {
        return questions
    } else {
        throw new Error('No question found')
    }
}

export const getAnAssessment = async (parent, args) => {
    const question = await Question.findById(args._id)
    if (question) {
        return question
    } else {
        throw new Error('No question found')
    }
}

export const getAssessmentBySubject = async (parent, args) => {
    const question = await Question.findOne({ subject: args.subjectId })
    if (question) {
        return question
    } else {
        throw new Error('No question found')
    }
}

export const createAssessment = async (parent, args) => {
    const subject = Subject.findById(args.subjectId)

    if (subject) {
        const question = new Question({
            subject: args.subjectId,
            questions: []
        })
        const createdQuestion = await question.save()
        return createdQuestion

    } else {
        throw new Error('The subject does not exist')
    }
}

export const addQuestions = async (parent, args) => {
    const assessment = await Question.findById(args.assessmentId)

    if (assessment) {
        const entry = {
            question: args.question,
            options: args.options,
            answer: args.answer
        }

        assessment.questions.push(entry)

        const updatedAssessment = await assessment.save()
        return updatedAssessment

    } else {
        throw new Error('The assessment does not exist')
    }
}