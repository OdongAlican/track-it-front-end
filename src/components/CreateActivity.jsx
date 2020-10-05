import React, { useState } from 'react'
import { createActivity } from '../actions/activitiesAction'
import { useDispatch } from 'react-redux'

const CreateActivity = ({ history }) => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const submitAcvtivty = (event) => {
        event.preventDefault()
        dispatch(createActivity({title}, history))
    }

    return (
        <div className="card col-md-3 p-3">
            <h3>Create Activity</h3>
            <form onSubmit={ submitAcvtivty }>
                <input value = { title } onChange={ e => setTitle(e.target.value) } className="form-control"></input>
                <button type="submit" className="btn btn-primary mt-1">Create</button>
            </form>

        </div>
    )
}

export default CreateActivity