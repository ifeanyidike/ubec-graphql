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

export const resultSetReducer = (state = [], action) => {
    switch (action.type) {
        case SET_RESULT_LOADING:
            return {
                loading: true
            }
        case SET_RESULT_SUCCESS:
            return {
                loading: false,
                result: action.payload
            }
        case SET_RESULT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const inCorrectResultSetReducer = (state = [], action) => {
    switch (action.type) {
        case SET_INCORRECT_RESULT_LOADING:
            return {
                loading: true
            }
        case SET_INCORRECT_RESULT_SUCCESS:
            return {
                loading: false,
                result: action.payload
            }
        case SET_INCORRECT_RESULT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const correctResultSetReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CORRECT_RESULT_LOADING:
            return {
                loading: true
            }
        case SET_CORRECT_RESULT_SUCCESS:
            return {
                loading: false,
                result: action.payload
            }
        case SET_CORRECT_RESULT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}