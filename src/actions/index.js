import { sendUnauthenticatedRequest } from '../utils/api';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export function signInAction({ username, password }, history) {
  return async dispatch => {
    const path = 'login';
    const method = 'post';
    const data = { username, password };
    try {
      const response = await sendUnauthenticatedRequest(method, path, data);
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', response.data.token);
      history.push('/activities');
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid username or Password',
      });
    }
  };
}

export function signUpAction({ username, password, age }, history) {
  return async dispatch => {
    const path = 'users';
    const method = 'post';
    const data = { username, password, age };
    try {
      const response = await sendUnauthenticatedRequest(method, path, data);
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', response.data.token);
      history.push('/activities');
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid User credentials',
      });
    }
  };
}

export function signOut() {
  localStorage.clear('user');
  window.location.href = '/';
}
