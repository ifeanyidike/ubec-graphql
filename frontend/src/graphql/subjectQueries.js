import { gql } from "@apollo/client"

export const getAllSubjectsQuery = gql`
    {
        subjects{
            _id
            name
        }
    }
`;

export const getASubjectQuery = gql`
    query($id: ID!){
        subject(_id: $id){
            _id
            name
        }
    }
`;

export const getSubjectByNameQuery = gql`
    query($name: String!){
        subjectByName(name: $name){
            _id
        }
    }
`;

export const createSubjectMutation = gql`
    mutation($name: String!){
        createSubject(name: $name){
            _id
            name
        }
    }
`
