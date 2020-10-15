/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signUpAction } from '../../actions';

const Signup = props => {
  const { history } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const submitData = event => {
    event.preventDefault();
    dispatch(signUpAction({ username, password, age }, history));
  };

  const errorMessage = useSelector(state => state.authReducer.error);

  return (
    <div data-testid="appSignup" className="general-login-section">
      <div className="login-section p-3">
        <h3>Sign Up</h3>
        <form onSubmit={submitData}>
          <input
            placeholder="Enter User Name"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            placeholder="Enter Age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          <p className="text-danger">{ errorMessage || '' }</p>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link to={{
          pathname: '/',
        }}
        >
          Already have an Account?
        </Link>
      </div>

    </div>
  );
};

Signup.propTypes = {
  history: PropTypes.string,
};

export default Signup;
