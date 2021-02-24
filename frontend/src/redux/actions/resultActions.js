import {
    SET_CORRECT_RESULT_FAIL,
    SET_CORRECT_RESULT_LOADING,
    SET_CORRECT_RESULT_SUCCESS,
    SET_INCORRECT_RESULT_FAIL,
    SET_INCORRECT_RESULT_LOADING,
    SET_INCORRECT_RESULT_SUCCESS,
    SET_RESULT_FAIL,
    SET_RESULT_LOADING,
    SET_RESULT_SUCCESS
} from "../constants/resultConstants"

export const setResult = (result) => dispatch => {
    try {
        dispatch({ type: SET_RESULT_LOADING })
        dispatch({
            type: SET_RESULT_SUCCESS,
            payload: result
        })

    } catch (error) {
        dispatch({
            type: SET_RESULT_FAIL,
            payload: error.message
        })
    }
}

export const setIncorrectResult = (inCorrectResult) => dispatch => {
    try {
        dispatch({ type: SET_INCORRECT_RESULT_LOADING })
        dispatch({
            type: SET_INCORRECT_RESULT_SUCCESS,
            payload: inCorrectResult
        })

    } catch (error) {
        dispatch({
            type: SET_INCORRECT_RESULT_FAIL,
            payload: error.message
        })
    }
}

export const setCorrectResult = (correctResult) => dispatch => {
    try {
        dispatch({ type: SET_CORRECT_RESULT_LOADING })
        dispatch({
            type: SET_CORRECT_RESULT_SUCCESS,
            payload: correctResult
        })

    } catch (error) {
        dispatch({
            type: SET_CORRECT_RESULT_FAIL,
            payload: error.message
        })
    }
}