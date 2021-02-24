import mongoose from 'mongoose'

const schoolSchema = mongoose.Schema({
    schoolCode: {
        type: String,
        required: true
    },
    schoolName: {
        type: String,
        required: true
    }
})

const School = mongoose.model('School', schoolSchema)
export default School