import React, { useState } from "react";
import { signInAction } from '../../actions'
import { useDispatch } from 'react-redux'

const Signin = (props) =>{
    let { history } = props
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 

    const saveData=(event)=>{
        event.preventDefault()
        dispatch(
            signInAction({username, password}, history))
    }

    return (
        <div>
            <form>
                <input value = { username } onChange={(e) => setUsername(e.target.value)}></input>
                <input value = { password } onChange={(e) => setPassword(e.target.value)} type="password"></input>
                <button onClick={ saveData }>Submit</button> 
            </form>
        </div>
    )
}

export default Signin