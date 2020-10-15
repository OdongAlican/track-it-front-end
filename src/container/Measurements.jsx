/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Measurement from '../components/Measurement';
import { fetchMeasurements } from '../actions/measurementsAction';
import Footer from '../components/Footer';

const Measurements = ({ location }) => {
  const activity = location.state;
  const dispatch = useDispatch();
  const timeDifference = [];
  const diffVal = [];

  useEffect(() => {
    dispatch(fetchMeasurements(activity.id));
  }, []);

  const measurements = useSelector(state => state.measurementsReducer.measurements);

  for (let i = 0; i < measurements.length; i += 1) {
    timeDifference.push(parseFloat(measurements[i].duration));
    if (timeDifference.length === 1) {
      diffVal.push(timeDifference[0]);
    } else if (timeDifference.length > 1) {
      diffVal.push(
        timeDifference[timeDifference.length - 2] - timeDifference[timeDifference.length - 1],
      );
    }
  }

  return (
    <div data-testid="appMeasurements">
      <div className="measurement-top d-flex">
        <button type="button" className="btn-plus mt-2 mr-1">
          <Link
            className="text-white"
            to={{
              pathname: `/activity/${activity.id}/create`,
              state: activity,
            }}
          >
            +
          </Link>
        </button>
      </div>
      <div>
        {
                    measurements.map((measurement, index) => (
                      <Measurement
                        key={index}
                        index={index}
                        measurement={measurement}
                        diffVal={diffVal}
                      />
                    ))
                }
      </div>
      <Footer />
    </div>
  );
};

Measurements.propTypes = {
  location: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
  })),
};

export default Measurements;
