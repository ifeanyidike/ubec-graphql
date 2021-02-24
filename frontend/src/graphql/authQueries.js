import { gql } from '@apollo/client'

export const studentsLoginQuery = gql`
    query($school: ID!, $studentCode: String!){
        studentsLogin(school: $school, studentCode: $studentCode){
            _id
            school
            name
            sex
            age
            class
            subjects
            token
        }
    }
`;

export const teachersLoginQuery = gql`
    query($school: ID!, $username: String!, $teacherCode: String!){
        teachersLogin(school: $school, username: $username, teacherCode: $teacherCode){
            _id
            school
            class
            username
            name
            subjects
            token
        }
    }
`;