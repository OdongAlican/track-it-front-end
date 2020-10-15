/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

  return (
    <div data-testid="appSignup">
      <div className="login-section col-md-6 border-right p-3">
        <h3>Sign Up</h3>
        <form onSubmit={submitData}>
          <input
            placeholder="Enter User Name"
            className="form-control col-md-6 mb-2"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            placeholder="Enter Password"
            className="form-control col-md-6 mb-2"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            placeholder="Enter Age"
            className="form-control col-md-6"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
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
