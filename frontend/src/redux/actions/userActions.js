
import { schools, studentsAuth } from '../../utils/authjson'
import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER } from '../constants/userConstants'

export const loginUser = (user) => (dispatch) => {
    dispatch({
        type: LOGIN_USER_REQUEST
    })

    for (let studentAuth of studentsAuth) {
        const { school, userName, studentCode: code } = studentAuth
        if (user.studentSchool === school && user.studentUserName === userName && user.studentCode === code) {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: studentAuth
            })

            localStorage.setItem('userInfo', JSON.stringify(studentAuth))

            return
        }
    }
    const errorMessage = 'Invalid details provided'
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: errorMessage
    })
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: LOGOUT_USER })
}