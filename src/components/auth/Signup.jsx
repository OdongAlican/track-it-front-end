import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { signUpAction } from '../../actions'

const Signup = ( props ) => {

    let { history } = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState(0)
    const dispatch = useDispatch()

    const submitData = (event) => {
        event.preventDefault()
        dispatch(signUpAction({username, password, age}, history))
    }

    return(
        <div>
        <form onSubmit = { submitData }>
            <label htmlFor="username">User Name</label>
            <input value = { username } onChange={ e => setUsername(e.target.value) }></input>
            <label htmlFor="password"> Password</label>
            <input value = { password } onChange= { e => setPassword(e.target.value )}></input>
            <label htmlFor="age"> Age </label>
            <input value = { age } onChange = { e => setAge(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form> 
        </div>
    )
}

export default Signup