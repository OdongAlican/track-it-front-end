import React, { useState } from "react";
import { signInAction } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

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
        <div>
            <div>
            <form onSubmit={ saveData }>
                <input value = { username } onChange={(e) => setUsername(e.target.value)}></input>
                <input value = { password } onChange={(e) => setPassword(e.target.value)} type="password"></input>
                <p>{ errorMessage ? errorMessage : '' }</p>
                <button type="submit">Submit</button> 
            </form>
            </div>
        </div>
    )
}

export default Signin