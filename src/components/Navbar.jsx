import React from 'react'
import Signout from './auth/Signout'

const Navbar = () => {
    return(
        <div className="col-md-12 d-flex pt-4 bg-info text-white justify-content-center">
            <h3>Track it</h3>
            <div>
                <Signout/>
            </div>
        </div>
    )
}

export default Navbar