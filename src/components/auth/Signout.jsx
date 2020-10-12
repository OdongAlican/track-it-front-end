import React from 'react'
import {signOut} from '../../actions/index'
import { useDispatch } from 'react-redux'

const Signout = () => {

const dispatch = useDispatch()

const logOut = () => {
    dispatch(signOut())
}

    return(
        <div data-testid="appSignout">
            <button 
            onClick={ logOut }
            className="btn btn-secondary">Sign Out</button>
        </div>
    )
}

export default Signout