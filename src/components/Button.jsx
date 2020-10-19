import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ detail }) => (
  <NavLink
    className="nav-link"
    style={
            {
              color: '#ABAEB3',
              textDecoration: 'none',
              padding: 0,
            }
        }
    to={{
      pathname: `${detail.path}`,
    }}
    activeClassName="active-button"
  >
    <div data-testid="appButton" className="link-div">
      <i className={detail.className} />
      <p>{ detail.name }</p>
    </div>

  </NavLink>
);

Button.propTypes = {
  detail: PropTypes.shape({
    path: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Button;
