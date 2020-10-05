import { combineReducers } from 'redux'
import authReducer from './authReducer'
import activitiesReducer from './activitiesReducer'

const rootReducer = combineReducers({
    authReducer,
    activitiesReducer
})

export default rootReducer