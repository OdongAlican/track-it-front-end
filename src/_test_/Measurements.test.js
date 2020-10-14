import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Measurements from '../container/Measurements';

afterEach(cleanup);
const initialState = {
  measurementsReducer: {
    measurements: ['test', 'sample'],
    error: 'test',
  },
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

const location = {
  state: 'sample',
};

it('renders Measurements correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Measurements location={location} /></Provider>
    </Router>,
  );
  const result = getAllByTestId('appMeasurements');
  expect(result[0])
    .toHaveTextContent('+ Invalid Date Hours 0.00 hrs Invalid Date Hours 0.00 hrs HomeCreate ActivityInformationMore');
});

it('renders Measurements correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Measurements location={location} /></Provider>
    </Router>,
  );
  const result = getAllByTestId('appMeasurements');
  expect(result[0]).not
    .toHaveTextContent('Some random stuff');
});
