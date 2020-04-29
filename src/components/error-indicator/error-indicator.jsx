import React from 'react'
import './error-indicator.css'
import icon from './icons8-star-wars.svg'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <p className="error-indicator__whoops-title">Whooops...</p>
            <p className="error-indicator__text">Something has gone terribly wrong</p>
            <p className="error-indicator__description">(but we already sent few droids to fix it)</p>
            <p className="error-indicator__icon">
                <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/star-wars">Star Wars icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
            </p>
        </div>
    )
}

export default ErrorIndicator