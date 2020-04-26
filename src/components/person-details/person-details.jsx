import React, { Component } from 'react'
import './person-details.css'

export default class PersonDetails extends Component {

    render() {
        return (
            <div>
                <div className="person-details">
                <div className="person-details__picture"></div>
                    <div className="person-details__description">
                        <h3 className="person-details__subtitle">R2-D2</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Gendermale</li>
                            <li className="list-group-item">Birth Year 43</li>
                            <li className="list-group-item">Eye Colored</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}