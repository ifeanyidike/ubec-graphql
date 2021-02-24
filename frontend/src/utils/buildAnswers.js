const buildAnswers = (questions, selectedAnswers) => {
    const newQuestions = questions.map(q => ({
        ...q, givenAnswer: ''
    }))
    const results = newQuestions.map(q => {
        q.givenAnswer = selectedAnswers.[q.question] ? selectedAnswers[q.question] : null
        return q
    })

    const incorrect = results.filter(({ answer, givenAnswer }) => answer !== givenAnswer)

    const correct = results.filter(({ answer, givenAnswer }) => answer === givenAnswer)
    return [correct, incorrect, results]
}

export default buildAnswers