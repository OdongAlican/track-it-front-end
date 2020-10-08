import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteActivity } from '../actions/activitiesAction'
import { Link } from "react-router-dom";

const Activity = ({ activity }) => {

    const dispatch = useDispatch()

    const deleteAct = (id) => {
        dispatch(deleteActivity(id))
    }

    return (
        <div className="card col-md-3 mt-2" >
            <img src={ activity.avatar.url } alt="boohoo" className="image-det"/>
            <div className="card-body">
                <h5 className="card-title">{ activity.title }</h5>
                <h5 className="card-title">{ activity.total }</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-secondary mr-2">Edit</button>
                <button className="btn btn-info mr-2">
                    <Link className="text-white" to={{
                        pathname: `/activity/${activity.id}/measurements`,
                        state: activity.id 
                    }}>
                        View Details
                    </Link>
                    </button>
                <button className="btn btn-danger" onClick = {() => deleteAct(activity.id) }>Delete</button>
            </div>
        </div>
    )
}

export default Activity