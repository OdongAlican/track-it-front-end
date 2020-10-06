import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createMeasurement } from '../actions/measurementsAction'
import { Link } from 'react-router-dom'

const CreateMeasurement = (props) => {
    const activityId = props.location.state
    const dispatch = useDispatch()
    const [watch, setWatch] = useState('00:00:00:00')
    let [ timer, setTimer ] = useState(false)
    let millisecond = 0
    let second = 0
    let minute = 0
    let hour = 0
    
    const run = () => {
        setWatch( `${ hour < 10 ? "0" + hour : hour }:
                    ${ minute < 10 ? "0" + minute : minute }:
                    ${ second < 10 ? "0" + second : second }:
                    ${ millisecond < 10 ? "0" + millisecond : millisecond }` 
                )
        millisecond++;
        if(millisecond === 100){
            millisecond = 0;
            second++
        }
        if(second === 60 ){
            second = 0
            minute++
        }
        if(minute === 60){
            minute = 0
            hour++
        }
    }

    const startWatch = () => {
        if(!timer){
            setTimer(setInterval(run, 10)) 
        }
    }

    const stopWatch = () => {
        clearInterval(timer)
        setTimer(false)
        
        let duration = (parseInt(watch.toString().split(':')[0].trim()) + 
        ( parseInt(watch.toString().split(':')[1].trim()) / 60) +
        ( parseInt(watch.toString().split(':')[2].trim()) / 3600)).toFixed(2)
        let date = new Date()
        dispatch(createMeasurement({duration, date }, activityId))

    }
    return (
        <div>
            <div className="col-md-4 mx-auto mt-4 border p-3">
            <div className="h1 d-flex justify-content-center">{ watch }</div>
            <div className="d-flex justify-content-center">
                <button onClick={ startWatch } className="btn btn-secondary mr-1">Start</button>
                <button onClick={ stopWatch } className="btn btn-secondary mr-1">
                    <Link to={{
                        pathname: `/activity/${ activityId }/measurements`,
                        state : activityId
                    }}>
                        Stop
                    </Link>
                </button>
            </div>
            </div>
        </div>
    )
}

export default CreateMeasurement