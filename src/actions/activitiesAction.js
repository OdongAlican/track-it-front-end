import axios from 'axios'

// export const FETCH_ACTIVITIES_REQUEST = 'FETCH_ACTIVITIES_REQUEST'
export const FETCH_ACTIVITIES_SUCCESS = 'FETCH_ACTIVITIES_SUCCESS'
export const FETCH_ACTIVITIES_FAILURE = 'FETCH_ACTIVITIES_FAILURE'

const URL = 'http://localhost:3000/activities'

export const fetchActivitiesSuccess = activities => ({
    type: FETCH_ACTIVITIES_SUCCESS,
    payload: activities
})

export const fetchActivitiesFailure = error => ({
    type: FETCH_ACTIVITIES_FAILURE,
    payload: error
})

export const fetchActivities = () => dispatch => {
    axios.get(URL, { headers: {"Authorization" : `Bearer ${localStorage.user}`} }).then( response => {
        const activities = response.data;
        dispatch(fetchActivitiesSuccess(activities))
    }).catch(error => {
        const errMsg = error
        dispatch(fetchActivitiesFailure(errMsg))
    })

}