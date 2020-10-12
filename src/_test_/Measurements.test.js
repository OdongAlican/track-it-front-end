import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import  renderer from 'react-test-renderer'
import { BrowserRouter as Router  } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import Measurements from '../container/Measurements'
import thunk from 'redux-thunk'

afterEach(cleanup);
const initialState = { 
    measurementsReducer: {
        measurements: ['test', 'sample'],
        error : "test"
    }  
};

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;

const location = {
    state : "sample"
}

it('renders Measurements correctly', () => {
    store = mockStore(initialState);
    const { getAllByTestId } = render(
        <Router>
          <Provider store={store}><Measurements location = { location }/></Provider>
      </Router>
    );
    const result = getAllByTestId('appMeasurements');
    expect(result[0]).
    toHaveTextContent("+ Invalid Date Hours 0.00 hrs Invalid Date Hours 0.00 hrs HomeCreate ActivityInformationMore");
  });

  it('renders Measurements correctly', () => {
    store = mockStore(initialState);
    const { getAllByTestId } = render(
        <Router>
          <Provider store={store}><Measurements location = { location }/></Provider>
      </Router>
    );
    const result = getAllByTestId('appMeasurements');
    expect(result[0]).not.
    toHaveTextContent("Some random stuff");
  });