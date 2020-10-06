import axios from 'axios'
export const FETCH_MEASUREMENTS_SUCCESS = 'FETCH_MEASUREMENTS_SUCCESS'
export const FETCH_MEASUREMENTS_FAILURE = 'FETCH_MEASUREMENTS_FAILURE'
export const CREATE_MEASUREMENT = 'CREATE_MEASUREMENT'

const URL = 'http://localhost:3000/activities'


export const fetchMeasurementsSuccess = measurements => ({
    type: FETCH_MEASUREMENTS_SUCCESS,
    payload: measurements
})

export const fetchMeasurementsFailure = error => ({
    type: FETCH_MEASUREMENTS_FAILURE,
    payload: error
})

export const createMeasurement = ({ duration, date }, activityId) => {
    console.log(activityId)
    axios.post(`${URL}/${activityId}/measurements`, { duration, date  },{ 
        headers: {"Authorization" : `Bearer ${localStorage.user}`} 
    })
 
    return {
        type: CREATE_MEASUREMENT,
        payload: { duration, date }
    }
}

export const fetchMeasurements = (id) => dispatch => {
    axios.get(`${URL}/${id}/measurements`, 
        { headers: {"Authorization" : `Bearer ${localStorage.user}`} }
        ).then( response => {
        const measurements = response.data;
        dispatch(fetchMeasurementsSuccess(measurements))
    }).catch(error => {
        const errMsg = error
        dispatch(fetchMeasurementsFailure(errMsg))
    })

}