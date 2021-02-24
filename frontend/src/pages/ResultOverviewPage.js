import React, { useEffect } from 'react'
import ResultOverviewPane from '../components/ResultOverviewPane'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router-dom'
import { subjects } from '../utils/authjson'
import { NameSubjectContainer } from '../styles/TestSubjectStyles'
import { ResultOverviewContainer } from '../styles/ResultStyles'


const ResultOverviewPage = () => {
    const history = useHistory()
    const location = useLocation()

    const { subjectId } = queryString.parse(location.search)
    const { userInfo } = useSelector(state => state.userLogin)

    const { result: results } = useSelector(state => state.resultSet)
    const { result: correctResults } = useSelector(state => state.correctResultSet)
    const { result: inCorrectResults } = useSelector(state => state.inCorrectResultSet)

    useEffect(() => {
        if (!userInfo) {
            history.push('/')
        }
        if (!results) {
            history.push('/mainarea')
        }
    }, [userInfo, results, history])

    const currentSubject = subjects.find(subject => subject._id === parseInt(subjectId))

    return (
        <ResultOverviewContainer>

            <NameSubjectContainer>
                <span className='subject'>{currentSubject && currentSubject.name}</span>
                <span className='student'>{userInfo.name}</span>
            </NameSubjectContainer>


            {   results &&
                results.map((result, index) =>
                    <ResultOverviewPane
                        key={index}
                        number={index + 1}
                        question={result.question}
                        options={result.options}
                        correctAnswer={result.answer}
                        givenAnswer={result.givenAnswer}
                    />
                )
            }
        </ResultOverviewContainer>
    )
}

export default ResultOverviewPage
