import { FetchActivityRequest, CreateActivityRequest, DeleteActivityRequest } from '../utils/api';

export const FETCH_ACTIVITIES_REQUEST = 'FETCH_ACTIVITIES_REQUEST';
export const FETCH_ACTIVITIES_SUCCESS = 'FETCH_ACTIVITIES_SUCCESS';
export const FETCH_ACTIVITIES_FAILURE = 'FETCH_ACTIVITIES_FAILURE';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

export const fetchActivitiesSuccess = activities => ({
  type: FETCH_ACTIVITIES_SUCCESS,
  payload: activities,
});

export const fetchActivitiesRequest = () => ({
  type: FETCH_ACTIVITIES_REQUEST,
});

export const fetchActivitiesFailure = error => ({
  type: FETCH_ACTIVITIES_FAILURE,
  payload: error,
});

export const deleteActivityRequest = id => ({
  type: DELETE_ACTIVITY,
  payload: id,
});

export const deleteActivity = id => async dispatch => {
  const method = 'delete';
  try {
    await DeleteActivityRequest(method, id);
    dispatch(deleteActivityRequest(id));
  } catch (error) {
    dispatch(fetchActivitiesFailure(error));
  }
};

export const fetchActivities = () => async dispatch => {
  const method = 'get';
  try {
    const response = await FetchActivityRequest(method);
    const activities = response.data;
    dispatch(fetchActivitiesSuccess(activities));
  } catch (error) {
    dispatch(fetchActivitiesFailure(error));
  }
};

export const createActivity = (form, history) => async dispatch => {
  history.push('/activities');
  dispatch(fetchActivitiesRequest());
  const method = 'post';
  try {
    await CreateActivityRequest(method, form);
    dispatch(fetchActivities());
  } catch (error) {
    dispatch(fetchActivitiesFailure(error));
  }
};
