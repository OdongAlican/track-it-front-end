import { FETCH_ACTIVITIES_SUCCESS, 
        FETCH_ACTIVITIES_FAILURE, 
        DELETE_ACTIVITY} from '../actions/activitiesAction'

const initialState = {
    activities: [],
    error: ''
}

const activitiesReducer = ( state = initialState, action) => {
    switch(action.type){
        case FETCH_ACTIVITIES_SUCCESS:
            return {
                ...state,
                activities: action.payload,
                error: ''
            }
        case FETCH_ACTIVITIES_FAILURE: 
            return {
                ...state,
                activities: [],
                error: action.payload
            }
        case DELETE_ACTIVITY: 
            return {
                ...state,
                activities: state.activities.filter((data) => data.id !== action.payload),
                error: ''
            }
        default:
            return state
    }
}

export default activitiesReducer