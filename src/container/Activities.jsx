import React, { useEffect } from'react'
import Activity from '../components/Activity'
import { useDispatch } from 'react-redux'
import { fetchActivities } from '../actions/activitiesAction'
import { useSelector } from 'react-redux'

const Activities = () => {

    const activities = useSelector( state => state.activitiesReducer.activities )

    console.log(activities)

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