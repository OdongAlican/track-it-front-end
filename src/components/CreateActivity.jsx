import React, { useState } from 'react'
import { createActivity } from '../actions/activitiesAction'
import { useDispatch } from 'react-redux'
import Footer from '../components/Footer'

const CreateActivity = ({ history }) => {
    const [title, setTitle] = useState('')
    const [total, setTotal] = useState('')
    const [image, setImage] = useState(null)
    const dispatch = useDispatch()

    const submitAcvtivty = (event) => {
        
        const form = new FormData()
        form.append("title", title)
        form.append("total", total)
        form.append("avatar", image)
        dispatch(createActivity(form, history))
        event.preventDefault()

    }

    return (
        <div className="create-activity">
        <div>
            <div className="activity-heading mb-2 p-3">
                <span>You can add a photo to your activity</span>
            </div>
            <div className="image-upload m-3 p-2 d-flex">
                <div className="left-image">
                    <i class="fas fa-tv"></i>
                </div>
                <div className="right-image">
                    <i class="fas fa-church"></i>
                </div>
            </div>
            <div>
                <form onSubmit={ submitAcvtivty }>
                <input 
                type="text"
                placeholder="Enter Title"
                value = { title } 
                onChange={ e => setTitle(e.target.value) } 
                className="input-control mb-2"></input>
                <input 
                type="number"
                placeholder="Enter Total"
                value = { total } 
                onChange={ e => setTotal(e.target.value) } 
                className="input-control"></input>
                <input
                type='file'
                className="mt-2 btn-control file-section"
                onChange={(e) => setImage(e.target.files[0])}
                ></input>
                <button type="submit" className="btn-control mt-1">
                    Create
                </button>
            </form>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default CreateActivity