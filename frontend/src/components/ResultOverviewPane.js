import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core'
import React from 'react'
import { ResultOverviewItem } from '../styles/ResultStyles'
import { colors } from "../utils/definitions"
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const ResultOverviewPane = ({ number, question, options, correctAnswer, givenAnswer }) => {
    const checkAnswers = (option) => {
        if (givenAnswer === correctAnswer) {
            if (givenAnswer === option) {
                return <p className='correct'
                    style={{ backgroundColor: colors.lime }}>
                    {option} <CheckIcon />
                </p>
            }
        } else {
            if (correctAnswer === option) {
                return <>
                    <p className='correct' style={{ backgroundColor: colors.lime }}>
                        {option} <CheckIcon />
                    </p>
                    {
                        givenAnswer !== null ?
                            <p className='incorrect' style={{ backgroundColor: colors.sweetRed }}>
                                {givenAnswer} <CloseIcon />
                            </p>
                            :
                            <p className='none' style={{ backgroundColor: colors.dye }}>
                                No Answer Provided
                            </p>
                    }
                </>

            }

        }
    }
    return (
        <ResultOverviewItem>
            <FormControl component="fieldset" className='container'>
                <FormLabel component="legend">{`Question ${number}`} </FormLabel>
                <p className='question'>{question}</p>
                {
                    options && options.map((option, index) =>
                        <div
                            className='options'
                            key={index}
                        >
                            {checkAnswers(option)}
                        </div>
                    )
                }
            </FormControl>
        </ResultOverviewItem>
    )
}

export default ResultOverviewPane
