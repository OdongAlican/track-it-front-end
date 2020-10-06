import React, { useEffect, useState } from 'react'
import Measurement from '../components/Measurement'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMeasurements } from '../actions/measurementsAction'
import { Link } from 'react-router-dom'

const Measurements = (props) => {
    const activityId = props.location.state
    const dispatch = useDispatch()
    let timeDifference = []
    let diffVal = []

    useEffect(()=> {
        dispatch(fetchMeasurements(activityId))
    }, [])
    const measurements = useSelector(state => state.measurementsReducer.measurements)

  
    for(let i = 0; i < measurements.length; i++){
        timeDifference.push(parseFloat(measurements[i].duration))
        if(timeDifference.length === 1){
             diffVal.push(timeDifference[0])
        }else if ( timeDifference.length > 1){
            diffVal.push(timeDifference[timeDifference.length - 2] - timeDifference[timeDifference.length - 1])
        }
    }
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
            <div>
                {
                    measurements.map((measurement, index) => (
                        <Measurement index = { index } measurement = { measurement } diffVal = { diffVal }/>
                    ))
                }
            </div>
        </div>
    )
}

export default Measurements