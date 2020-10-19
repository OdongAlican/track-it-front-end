/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteActivity } from '../actions/activitiesAction';

const Activity = ({ activity }) => {
  const dispatch = useDispatch();

  const deleteAct = id => {
    dispatch(deleteActivity(id));
  };

  return (
    <div data-testid="appActivity" className="main-section d-flex p-1 bg-white">
      <div className="image-section">
        <img src={activity.avatar.url} alt="boohoo" className="image-det" />
      </div>
      <div className="activity-body ml-1">
        <div className="w-100 title-div-section">
          <div className="activity-title text-secondary d-flex">
            { activity.title.length < 15 ? `${activity.title}`
              : `${activity.title.substring(0, 20)}...` }
          </div>
        </div>
        <div className="activity-text text-secondary d-flex">
          <div className="activity-inner">
            { activity.total }
          </div>
          <div>
            <small>Hrs</small>
          </div>
        </div>
        <div className="lower-section">
          <Link
            className="links-info"
            to={{
              pathname: `/activity/${activity.id}/measurements`,
              state: activity,
            }}
          >
            <button
              type="button"
              className="button-details"
            >
              Details
            </button>
          </Link>
          <div className="activity-link">
            <i className="far fa-trash-alt trash-section text-danger" onClick={() => deleteAct(activity.id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.objectOf(PropTypes.string),
    title: PropTypes.string,
    total: PropTypes.string,
  }).isRequired,
};

export default Activity;
