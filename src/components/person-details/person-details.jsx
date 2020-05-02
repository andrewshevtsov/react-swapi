import React, { Component } from 'react'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'
import './person-details.css'

export default class PersonDetails extends Component {

    swapiService = new SwapiService()

    state = {
        person: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }

    updatePerson() {

        const { personId } = this.props

        if (!personId) {
            return
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                })
            })
            .catch(this.onError)
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {

        if (!this.state.person) {
            return <h4>Select a person in person list</h4>
        }

        const { person, loading, error } = this.state

        const hasData = !(loading && error)
        const errorMessage = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Spinner /> : null
        const personView = hasData ? <PersonView person={person}/> : null

        return (
            <div className="person-details">
                {errorMessage}
                {spinner}
                {personView}
            </div>
        )
    }
}

const PersonView = ({ person }) => {

    const { id, name, gender, birthYear, eyeColor } = person

    return (
        <React.Fragment>
            <div className="person-details__picture">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
            </div>
            <div className="person-details__description">
                <h3 className="person-details__subtitle">{name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <p className="person-text">Gender: </p>
                        {gender}
                    </li>
                    <li className="list-group-item">
                        <p className="person-text">Birth Year: </p>
                        {birthYear}
                    </li>
                    <li className="list-group-item">
                        <p className="person-text">Eye Color: </p>
                        {eyeColor}
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}