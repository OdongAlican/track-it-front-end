/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Signout from './auth/Signout';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0.8 },
    enter: { opacity: 0.8 },
    leave: { opacity: 0.8 },
  });
  const menuTransitions = useTransition(showMenu, null, {
    from: { position: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  return (
    <div data-testid="navbar" className="d-flex pt-4 text-white nav-bar-section">
      <div className="header-section">
        <h3>Track it</h3>
      </div>
      <div className="itag-section">
        <i
          className="fas fa-power-off"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      {
                maskTransitions.map(({ item, key, props }) => item
                && (
                <animated.div
                  className="menu-mask"
                  onClick={() => setShowMenu(false)}
                  key={key}
                  style={props}
                />
                ))
            }
      {
                menuTransitions.map(({ item, key, props }) => item
                && (
                <animated.div
                  className="menu-section"
                  key={key}
                  style={props}
                >
                  <Signout />
                </animated.div>
                ))
            }
    </div>
  );
};

export default Navbar;
