import React, { useEffect } from'react'
import Activity from '../components/Activity'
import { useDispatch, useSelector } from 'react-redux'
import { fetchActivities } from '../actions/activitiesAction'
import Summary from '../components/Summary'

const Activities = () => {

    const activities = useSelector( state => state.activitiesReducer.activities )
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchActivities())
    }, [])

    return(
        <div>
            <div>
                <Summary activities = { activities }/>
            </div>
            <div>
                {
                    activities.map((activity, key) => (
                        <Activity activity = { activity } key = { key }/>
                    ))
                }            
            </div>
        </div>
    )

}

export default Activities