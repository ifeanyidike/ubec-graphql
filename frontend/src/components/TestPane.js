import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TestPaneContainer } from '../styles/TestSubjectStyles';


const TestPane = ({ piece, number, selectedAnswers, setSelectedAnswers }) => {
    const [value, setValue] = useState('')
    const { question, options } = piece

    const handleChange = e => {
        const newValue = e.target.value
        setValue(newValue)
        setSelectedAnswers(prevState => ({ ...prevState, [question]: newValue }))

    }
    return (
        <TestPaneContainer>

            <FormControl component="fieldset">
                <FormLabel component="legend">{`Question ${number}`} </FormLabel>
                <p className='question'>{question}</p>
                <RadioGroup aria-label={`Question ${number}`} value={value} onChange={handleChange}>
                    {
                        options.map((option, index) =>
                            <FormControlLabel
                                key={index}
                                value={option}
                                control={<Radio />}
                                label={option}
                            />
                        )
                    }

                </RadioGroup>
            </FormControl>

        </TestPaneContainer>
    )
}

export default TestPane
