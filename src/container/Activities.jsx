import React, { useEffect } from'react'
import Activity from '../components/Activity'
import { useDispatch, useSelector } from 'react-redux'
import { fetchActivities } from '../actions/activitiesAction'

const Activities = () => {

    const activities = useSelector( state => state.activitiesReducer.activities )

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchActivities())
    }, [])

    return(
        <div>
            {
                activities.map((activity, key) => (
                    <Activity activity = { activity } key = { key }/>
                ))
            }
        </div>
    )

}

export default Activities