import { LoadMeasurementRequest, CreateMeasurementRequest } from '../utils/api';

export const FETCH_MEASUREMENTS_SUCCESS = 'FETCH_MEASUREMENTS_SUCCESS';
export const FETCH_MEASUREMENTS_FAILURE = 'FETCH_MEASUREMENTS_FAILURE';

export const fetchMeasurementsSuccess = measurements => ({
  type: FETCH_MEASUREMENTS_SUCCESS,
  payload: measurements,
});

export const fetchMeasurementsFailure = error => ({
  type: FETCH_MEASUREMENTS_FAILURE,
  payload: error,
});

export const fetchMeasurements = id => async dispatch => {
  const method = 'get';
  try {
    const response = await LoadMeasurementRequest(method, id);
    const measurements = response.data;
    dispatch(fetchMeasurementsSuccess(measurements));
  } catch (error) {
    const errMsg = error;
    dispatch(fetchMeasurementsFailure(errMsg));
  }
};

export const createMeasurement = ({ duration, date }, activityId) => async dispatch => {
  const method = 'post';
  const data = { duration, date };
  try {
    await CreateMeasurementRequest(method, data, activityId);
    dispatch(fetchMeasurements(activityId));
  } catch (error) {
    dispatch(fetchMeasurementsFailure(error));
  }
};
