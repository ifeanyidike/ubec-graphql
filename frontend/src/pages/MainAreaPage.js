import React, { useEffect } from 'react'
import { MainAreaContainer } from '../styles/MainDashboardStyles'
import MainDashboard from "../components/MainDashboard";
import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { studentsLoginQuery } from '../graphql/authQueries';
import { getUserInfo } from '../utils/authUtilities';

const MainAreaPage = () => {
    const history = useHistory()
    const { loading, error, data } = useQuery(studentsLoginQuery)
    const userInfo = getUserInfo(data)

    // LEA-8319BD
    useEffect(() => {
        if (!userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    return (
        <MainAreaContainer>
            <h2>Hi {userInfo && userInfo.name}</h2>
            <p>What do you want to do?</p>
            <MainDashboard />
        </MainAreaContainer>
    )
}

export default MainAreaPage
