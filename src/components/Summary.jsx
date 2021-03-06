/* eslint-disable radix */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({ activities }) => {
  const newArray = [];
  activities.forEach(element => {
    newArray.push(parseInt(element.total));
  });

  const res = newArray.reduce((val, num) => val + num, 0);
  return (
    <div data-testid="appSummary" className="d-flex summary-section">
      {
                activities.map((val, index) => {
                  const percentageValue = parseInt(((parseInt(val.total) / res)) * 100);
                  if (percentageValue <= 25) {
                    return (
                      <div key={index} className=" card-stuff pt-2 pb-2">
                        <div
                          className="percentage-section"
                          style={{ borderRight: '5px solid #94E28E' }}
                        >
                          <div>{ percentageValue }</div>
                          <div>%</div>
                        </div>
                        <div className="title-section"><span>{val.title}</span></div>
                      </div>
                    );
                  } if (percentageValue > 25 && percentageValue <= 50) {
                    return (
                      <div key={index} className=" card-stuff pt-2 pb-2">
                        <div
                          className="percentage-section"
                          style={{
                            borderRight: '5px solid #F24429',
                            borderBottom: '5px solid #F24429',
                          }}
                        >
                          <div>{ percentageValue }</div>
                          <div>%</div>
                        </div>
                        <div className="title-section"><span>{val.title}</span></div>
                      </div>
                    );
                  } if (percentageValue > 50 && percentageValue <= 75) {
                    return (
                      <div key={index} className=" card-stuff pt-2 pb-2">
                        <div
                          className="percentage-section"
                          style={{
                            borderRight: '5px solid #94E28E',
                            borderBottom: '5px solid #94E28E',
                            borderLeft: '5px solid #94E28E',
                          }}
                        >
                          <div>{ percentageValue }</div>
                          <div>%</div>
                        </div>
                        <div className="title-section"><span>{val.title}</span></div>
                      </div>
                    );
                  }
                  return (
                    <div key={index} className=" card-stuff pt-2 pb-2">
                      <div
                        className="percentage-section"
                        style={{ border: '5px solid #F24429' }}
                      >
                        <div>{ percentageValue }</div>
                        <div>%</div>
                      </div>
                      <div className="title-section"><span>{val.title}</span></div>
                    </div>
                  );
                })
            }
    </div>
  );
};

Summary.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({
    id: false,
  })),
};

export default Summary;
