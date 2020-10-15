import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ detail }) => (
  <div data-testid="appButton" className="link-div px-0">
    <button type="button" className="link-button w-100 h-100">
      <Link
        style={
                        {
                          color: '#ABAEB3',
                        }
                    }
        to={{
          pathname: `${detail.path}`,
        }}
      >
        <i className={detail.className} />
        <p>{ detail.name }</p>
      </Link>
    </button>
  </div>
);

Button.propTypes = {
  detail: PropTypes.shape({
    path: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Button;
