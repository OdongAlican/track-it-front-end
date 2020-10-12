import React, { useEffect } from 'react'
import Measurement from '../components/Measurement'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMeasurements } from '../actions/measurementsAction'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Measurements = (props) => {
    const activity = props.location.state
    const dispatch = useDispatch()
    let timeDifference = []
    let diffVal = []

    useEffect(()=> {
        dispatch(fetchMeasurements(activity.id))
    }, [])

    const measurements = useSelector(state => state.measurementsReducer.measurements)
  
    for(let i = 0; i < measurements.length; i++){
        timeDifference.push(parseFloat(measurements[i].duration))
        if(timeDifference.length === 1){
             diffVal.push(timeDifference[0])
        }else if ( timeDifference.length > 1){
            diffVal.push(
                timeDifference[timeDifference.length - 2] - timeDifference[timeDifference.length - 1]
                )
        }
    }

    return (
        <div data-testid="appMeasurements">
            <div className="measurement-top d-flex">
                <button className= "btn-plus mt-2 mr-1"> 
                    <Link className="text-white" to={{
                        pathname: `/activity/${activity.id}/create`,
                        state : activity,
                    }}>
                        +
                    </Link>
                 </button>
            </div>
            <div>
                {
                    measurements.map((measurement, index) => (
                        <Measurement 
                            key = { index }
                            index = { index } 
                            measurement = { measurement } 
                            diffVal = { diffVal }/>
                    ))
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Measurements