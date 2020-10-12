import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ detail }) => {
    return(
        <div data-testid="appButton" className="link-div px-0">
            <button className="link-button w-100 h-100">
                    <Link style={
                        {
                            color: "#ABAEB3"
                        }
                    } to={{
                        pathname: `${ detail.path }`
                    }}>
                    <i className={ detail.className } ></i>
                     <p>{ detail.name }</p>
                    </Link>
            </button>
        </div>
    )
}

export default Button