import React from 'react'
import SubjectCard from '../components/SubjectCard'
import { SubjectsContainer } from '../styles/TestSubjectStyles'
import { useSelector } from 'react-redux'
import { subjects } from "../utils/authjson"
import { useQuery } from '@apollo/client'
import { studentsLoginQuery } from '../graphql/authQueries'
import { getUserInfo } from '../utils/authUtilities'


const SubjectsPage = () => {
    const { loading, error, data } = useQuery(studentsLoginQuery)
    const userInfo = getUserInfo(data)


    return (
        <SubjectsContainer>

            { userInfo.subjects.map((subject, index) =>

                <SubjectCard
                    key={index}
                    text={subject}
                />
            )}

        </SubjectsContainer>
    )
}

export default SubjectsPage
