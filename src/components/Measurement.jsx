import React from 'react'

const Measurement = ({ measurement, index, diffVal }) => {
    let date = new Date(measurement.date);
    let res = date.toUTCString()
    let today = new Date()
    let resToday
    let arrayDummy = []

    let dayToday = today.toUTCString().split(' ')[0]
    let dayDate = date.toUTCString().split(' ')[0]

    let dateToday = today.toUTCString().split(' ')[1]
    let dateDate = date.toUTCString().split(' ')[1]

    let monthToday = today.toUTCString().split(' ')[2]
    let monthDay = date.toUTCString().split(' ')[2]

    if( dayToday === dayDate 
        && dateToday === dateDate 
        && monthToday === monthDay 
        ){
            let test = res.split(' ')
            test.splice(0,1)
            test.unshift('Today, ')
            test.splice(4, 2)
            resToday = test.join(' ')
           
        } else if (
            parseInt(dateDate) === (parseInt(dateToday) - 1)
            && monthToday === monthDay
        ){
            let test = res.split(' ')
            test.splice(0,1)
            test.unshift('Yesterday, ')
            test.splice(4, 2)
            resToday = test.join(' ')
        } else{
            resToday = res
        }

        let title = resToday.split(' ')[0]
        arrayDummy.push(parseFloat(measurement.duration))
    return(
        <div>
            <div className="card col-md-4 ml-2 mt-1 p-1"> { title } </div>
            <div className="card col-md-4 mt-2 ml-2">
                <div className="d-flex">
                    <div className="card m-1 col-md-7 p-1 bg-secondary">
                        <p>{ 
                            resToday.split(' ').slice(1).join(' ') 
                        }</p>
                        <p>{ measurement.duration } Hours</p>
                    </div>
                    <div className=" card m-1 col-md-5 p-1 border">
                        <p> { 
                           diffVal[index + 1] ? parseFloat( diffVal[index + 1] ).toFixed(3) : 
                           parseFloat('0.00').toFixed(2)
                        } </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Measurement