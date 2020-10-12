import React, { useEffect } from'react'
import Activity from '../components/Activity'
import { useDispatch, useSelector } from 'react-redux'
import { fetchActivities } from '../actions/activitiesAction'
import Summary from '../components/Summary'
import Footer from '../components/Footer'

const Activities = () => {

    const activitiesReducer = useSelector( state => state.activitiesReducer )
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchActivities())
    }, [])

    let todaysDate = new Date()
    let result = todaysDate.toUTCString().split(' ')
    result.splice(4,2)
    let finalValue = result.join(' ')

    return activitiesReducer.loading ? ( <div className="mt-4"> <h1> Loading....</h1> </div> ) : 
    activitiesReducer.error ? ( <div> { activitiesReducer.error } </div>) :
    (
        <div className="home-section">

            <div className="d-flex justify-content-center align-items-center py-3 date-section">
                <div className="first-div">
                    <i class="fas fa-angle-left"></i>
                </div>
                <div className="second-div">
                    { finalValue }
                </div>
                <div className="third-div">
                    <i class="fas fa-angle-right"></i>
                </div>
            </div>
            <div className="w-100">
                <Summary activities = { activitiesReducer.activities }/>
            </div>
            <div className="d-flex  col-sm-12 activities-main row mx-0">
                {
                activitiesReducer.activities.map((activity, key) => (
                        <Activity activity = { activity } key = { key }/>
                    ))
                }            
            </div>
            <Footer/>
        </div>
    ) 

}

export default Activities