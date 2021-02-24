import { gql } from "@apollo/client"

export const getAllSchoolsQuery = gql`
    {
        schools{
            _id
            schoolCode
            schoolName
        }
    }
`;

export const getASchoolQuery = gql`
    query($id: ID!){
        school(_id: $id){
            _id
            schoolCode
            schoolName
        }
    }
`;

export const createSchoolMutation = gql`
    mutation($schoolCode: String!, $schoolName: String!){
        createSchool(schoolCode: $schoolCode, schoolName: $schoolName){
            _id
            schoolCode
            schoolName
        }
    }
`
