/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signInAction } from '../../actions';

const Signin = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveData = event => {
    event.preventDefault();
    dispatch(signInAction({ username, password }, history));
  };

  const errorMessage = useSelector(state => state.authReducer.error);

  return (
    <div data-testid="appSignin" className="general-login-section">
      <div className="login-section p-3">
        <h3>Log In</h3>
        <form onSubmit={saveData}>
          <input placeholder="Enter User Name" value={username} onChange={e => setUsername(e.target.value)} />
          <input placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
          <p className="text-danger">{ errorMessage || '' }</p>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link to={{
          pathname: '/signup',
        }}
        >
          Don't have an account?
        </Link>
      </div>

    </div>
  );
};

Signin.propTypes = {
  history: PropTypes.string,
};

export default Signin;
