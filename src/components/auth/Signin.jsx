import React, { useState } from "react";
import { signInAction } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import Signup from './Signup'

const Signin = (props) =>{
    let { history } = props
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 

    const saveData = (event)=>{
        event.preventDefault()
        dispatch(signInAction({ username, password }, history))
    }

    const errorMessage = useSelector(state => state.authReducer.error)

    return (
        <div className="d-flex">
            <div className="bg-secondary col-md-6 border-right p-3">
                <h3>Log In</h3>
                <form onSubmit={ saveData }>
                    <input placeholder="Enter User Name" className="form-control mb-2 col-md-6" value = { username } onChange={(e) => setUsername(e.target.value)}></input>
                    <input placeholder="Enter Password" className="form-control col-md-6" value = { password } onChange={(e) => setPassword(e.target.value)} type="password"></input>
                    <p className="text-danger">{ errorMessage ? errorMessage : '' }</p>
                    <button type="submit" className="btn btn-primary">Submit</button> 
                </form>
            </div>
            <div className="bg-secondary col-md-6 p-3">
                <Signup history = { history }/>
            </div>
        </div>
    )
}

export default Signin