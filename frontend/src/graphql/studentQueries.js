import { gql } from "@apollo/client"

export const getAllStudentsQuery = gql`
    {
        students{
            _id
            school
            name
            sex
            age
            class
            subjects
        }
    }
`;

export const getAStudentQuery = gql`
    query($id: ID!){
        student(_id: $id){
            _id
            school
            name
            sex
            age
            class
            subjects
        }
    }
`;

export const createStudentMutation = gql`
    mutation($school: ID!, $name: String!, $age: Int!, $sex: String!, $class: String!, $studentCode: String!, $subjects: [ID]!){
        createStudent(school: $school, name: $name, age: $age, sex: $sex, class: $class, studentCode: $studentCode, subjects: $subjects){
            _id
            school
            name
            age
            sex
            class
            studentCode
            subjects
        }
    }
`

export const updateStudentMutation = gql`
    mutation($id: ID!, $school: ID!, $name: String!, $age: Int!, $sex: String!, $class: String!, $studentCode: String!, $subjects: [ID]!){
        updateStudent(_id: $id, school: $school, name: $name, age: $age, sex: $sex, class: $class, studentCode: $studentCode, subjects: $subjects){
            _id
            school
            name
            age
            sex
            class
            studentCode
            subjects
        }
    }
`
