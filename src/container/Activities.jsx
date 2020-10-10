import React, { useEffect } from'react'
import Activity from '../components/Activity'
import { useDispatch, useSelector } from 'react-redux'
import { fetchActivities } from '../actions/activitiesAction'
import Summary from '../components/Summary'
import { Link } from 'react-router-dom'

const Activities = () => {

    const activitiesReducer = useSelector( state => state.activitiesReducer )
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchActivities())
    }, [])

    return activitiesReducer.loading ? ( <div className="mt-4"> <h1> Loading....</h1> </div> ) : 
    activitiesReducer.error ? ( <div> { activitiesReducer.error } </div>) :
    (
        <div>
            <div>
                <button className="btn btn-primary mt-2 ml-2 text-white mb-2">
                    <Link className="text-white" to={{
                        pathname: '/create-activity'
                    }}>
                     Create Activity
                    </Link>
                </button>
            </div>
            <div>
                <Summary activities = { activitiesReducer.activities }/>
            </div>
            <div>
                {
                activitiesReducer.activities.map((activity, key) => (
                        <Activity activity = { activity } key = { key }/>
                    ))
                }            
            </div>
        </div>
    )

}

export default Activities