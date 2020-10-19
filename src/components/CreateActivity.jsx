/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createActivity } from '../actions/activitiesAction';
import Footer from './Footer';

const CreateActivity = ({ history }) => {
  const [title, setTitle] = useState('');
  const [total, setTotal] = useState('');
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const submitAcvtivty = event => {
    const form = new FormData();
    form.append('title', title);
    form.append('total', total);
    form.append('avatar', image);
    dispatch(createActivity(form, history));
    event.preventDefault();
  };

  return (
    <div data-testid="appCreateActivity" className="create-activity">
      <div className="create-activity-inner pb-3">
        <div className="activity-heading mb-2 p-3">
          <span>You can add a photo to your activity</span>
        </div>
        <div className="image-upload m-3 p-2 d-flex">
          <div className="left-image">
            <i className="fas fa-tv" />
          </div>
          <div className="right-image">
            <i className="fas fa-church" />
          </div>
        </div>
        <div>
          <form onSubmit={submitAcvtivty}>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="input-control mb-2"
            />
            <input
              type="number"
              placeholder="Enter Total"
              value={total}
              onChange={e => setTotal(e.target.value)}
              className="input-control"
            />
            <input
              type="file"
              className="mt-2 btn-control file-section"
              onChange={e => setImage(e.target.files[0])}
            />
            <button type="submit" className="btn-control mt-1">
              Create
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

CreateActivity.propTypes = {
  history: PropTypes.string,
};

export default CreateActivity;
