import React from 'react'

const Measurement = ({ measurement }) => {
    return(
        <div>
            <div className="card col-md-4 mt-2 ml-2">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> { measurement.duration } </li>
                    <li className="list-group-item">{ measurement.created_at }</li>
                </ul>
            </div>
        </div>
    )
}

export default Measurement