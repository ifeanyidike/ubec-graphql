import mongoose from 'mongoose'
import Subject from "./subjectModels.js"

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Subject
    },
    questions: [
        {
            question: {
                type: String,
                required: true
            },
            options: [
                String
            ],
            answer: {
                type: String,
                required: true
            }
        }
    ]
}, {
    timestamps: true
})

const Question = mongoose.model('Question', questionSchema)

export default Question