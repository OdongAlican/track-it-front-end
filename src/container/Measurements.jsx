import React, { useEffect } from 'react'
import Measurement from '../components/Measurement'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMeasurements } from '../actions/measurementsAction'
import { Link } from 'react-router-dom'

const Measurements = (props) => {
    const activityId = props.location.state
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchMeasurements(activityId))
    }, [])
    const measurements = useSelector(state => state.measurementsReducer.measurements)
    
    return (
        <div>
            <div>
                <button className= "btn btn-primary mt-2 ml-2 "> 
                    <Link className="text-white" to={{
                        pathname: `/activity/${activityId}/create`,
                        state : activityId
                    }}>
                        Add Measurement
                    </Link>
                 </button>
            </div>
            {
                measurements.map((measurement, key) => (
                    <Measurement key = { key } measurement = { measurement } />
                ))
            }
        </div>
    )
}

export default Measurements