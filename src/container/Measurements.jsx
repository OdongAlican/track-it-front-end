import React, { useEffect } from 'react'
import Measurement from '../components/Measurement'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMeasurements } from '../actions/measurementsAction'

const Measurements = (props) => {
    const actID = props.location.state
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchMeasurements(actID))
    }, [])
    const measurements = useSelector(state => state.measurementsReducer.measurements)
    
    return (
        <div>
            {
                measurements.map((measurement, key) => (
                    <Measurement key = { key } measurement = { measurement } />
                ))
            }
        </div>
    )
}

export default Measurements