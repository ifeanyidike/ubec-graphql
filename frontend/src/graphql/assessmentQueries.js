import { gql } from "@apollo/client"

export const getAllAssessmentsQuery = gql`
    {
        assessments{
            _id
            questions{
                _id
                question
                options
                answer
            }
        }
    }
`;

export const getAnAssessmentQuery = gql`
    query($id: ID!){
        assessment(_id: $id){
            _id
            questions{
                _id
                question
                options
                answer
            }
        }
    }
`;

export const getAssessmentBySubjectQuery = gql`
    query($subjectId: ID!){
        assessmentBySubject(subjectId: $subjectId){
            questions{
                _id
                question
                options
                answer
            }
        }
    }
`;


export const createAssessmentMutation = gql`
    mutation($subjectId: ID!){
        createAssessment(subjectId: $subjectId){
            _id
        }
    }
`

export const addQuestionMutation = gql`
    mutation($assessmentId: ID!, $question: String!, $options: [String!]!, $answer: String){
        addQuestionMutation(assessmentId: $assessmentId, question: $question, options: $options, answer: $answer){
            _id,
            question,
            options,
            answer
        }
    }
`