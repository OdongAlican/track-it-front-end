import React from 'react'

const Summary = ( { activities }) => {
    let newArray = []
        activities.forEach(element => {
           newArray.push(parseInt(element.total)) 
        });

        let res = newArray.reduce((val, num) => val + num, 0)
        console.log(res)
    return(
        <div className="d-flex">
            {
                activities.map((val, index) => (
                    <div key = { index } className="card">
                        <p>{val.title}</p>
                        <div>
                            {
                            parseFloat( 
                                ((parseInt(val.total) / res)
                                ) * 100).toFixed(2)
                            } %
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Summary