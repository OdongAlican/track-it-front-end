import React from 'react'


const Summary = ( { activities }) => {
    return(
        <div className="d-flex">
            {
                activities.map((val, index) => (
                    <div key = { index } className="card">
                        <p>{val.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Summary