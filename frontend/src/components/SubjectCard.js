import React, { useState, useEffect } from 'react'
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { SubjectPane } from '../styles/TestSubjectStyles';
import { useHistory } from 'react-router-dom'
import Loader from "../components/Progress"
import { useLazyQuery, useQuery } from '@apollo/client';
import { getSubjectByNameQuery } from '../graphql/subjectQueries';
import DialogMessage from '../components/DialogMessage'
import { getAssessmentBySubjectQuery } from '../graphql/assessmentQueries';

const SubjectCard = ({ text, id }) => {
    const history = useHistory()
    const [checked, setChecked] = useState(false)
    const [open, setOpen] = useState(false)
    const [item, setItem] = useState('')
    const [getSubject, { data: subjectData }] = useLazyQuery(getSubjectByNameQuery)


    const handleSubjectClick = () => {
        setChecked(true)
        getSubject({
            variables: {
                name: text
            }
        })
    }

    useEffect(() => {
        if (subjectData && subjectData.subjectByName === null) {
            setOpen(true)
            setChecked(false)
        }
    }, [subjectData])


    useEffect(() => {
        if (subjectData) {
            if (subjectData.subjectByName) {
                setTimeout(() => {
                    history.push(`/testpane/?subjectId=${subjectData.subjectByName._id}`)
                }, [1000])
            }

        }
    }, [history, subjectData])



    return (
        <SubjectPane onClick={handleSubjectClick}>
            {checked && <Loader />}
            <span>{text}</span>
            <BeenhereIcon fontSize='large' style={{ display: checked ? 'block' : 'none' }} />

            <DialogMessage open={open} setOpen={setOpen}>

                There's no test available for this subject. Please choose another subject.
            </DialogMessage>
        </SubjectPane>
    )
}

export default SubjectCard
