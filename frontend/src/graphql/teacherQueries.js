import { gql } from "@apollo/client"

export const getAllTeachersQuery = gql`
    {
        teachers{
            _id
            school
            name
            username
            class
            subjects
        }
    }
`;

export const getATeacherQuery = gql`
    query($id: ID!){
        teacher(_id: $id){
            _id
            school
            name
            username
            class
            subjects
        }
    }
`;

export const createTeacherMutation = gql`
    mutation($school: ID!, $username: String!, $class: String!, $name: String!, $teacherCode: String!, $subjects: [String]!){
        createTeacher(school: $school, name: $name, class: $class, username: $username, teacherCode: $teacherCode, subjects: $subjects){
            _id
            school
            name
            class
            teacherCode
            subjects
        }
    }
`

export const updateTeacherMutation = gql`
    mutation($id: ID!, $school: ID!, $username: String!, $class: String!, $name: String!, $teacherCode: String!, $subjects: [String]!){
        updateTeacher(_id: $id, school: $school, name: $name, class: $class, username: $username, teacherCode: $teacherCode, subjects: $subjects){
            _id
            school
            name
            class
            teacherCode
            subjects
        }
    }
`
