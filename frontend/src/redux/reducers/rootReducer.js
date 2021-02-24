import { combineReducers } from 'redux'

import { userLoginReducer } from './userReducers'

import {
    resultSetReducer,
    inCorrectResultSetReducer,
    correctResultSetReducer
} from './resultReducers'
import { drawerToggleReducer } from './utilReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    drawerToggle: drawerToggleReducer,
    resultSet: resultSetReducer,
    inCorrectResultSet: inCorrectResultSetReducer,
    correctResultSet: correctResultSetReducer
})

export default reducer