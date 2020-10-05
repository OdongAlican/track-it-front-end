import React from 'react'

const Activity = ({ activity }) => {

    return (
        <div className="card col-md-3 mt-2" >
            <div className="card-body">
                <h5 className="card-title">{ activity.title }</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="card-link">Edit</a>
                <a className="card-link">Delete</a>
            </div>
        </div>
    )

}

export default Activity