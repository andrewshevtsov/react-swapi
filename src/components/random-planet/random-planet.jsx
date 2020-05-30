import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'

import ErrorIndicator from '../error-indicator'
import './random-planet.css'

export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 10000
    }

    static propTypes = {
        updateInterval: PropTypes.number
    }

    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: true,
        imageUrl: '',
        error: false
    }

    componentDidMount() {
        const { updateInterval } = this.props
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, updateInterval)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {

        const id = planet.id

        fetch(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`)
            .then((res) => {
                if (res.status === 404) {
                    this.setState({
                        imageUrl: 'https://picsum.photos/200?grayscale'
                    })
                } else {
                    this.setState({
                        imageUrl: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
                    })
                }
            })

        this.setState({
            planet,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 2

        this.swapiService
            .getPlanet(id)
            .then( this.onPlanetLoaded )
            .catch( this.onError )
    }

    render() {

        const { planet, loading, imageUrl, error } = this.state

        const hasData = !(loading || error)
        const errorMsg = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Spinner /> : null
        const randomPlanetContent = hasData ? <PlanetView planet={planet} imageUrl={imageUrl} /> : null

        return (
            <React.Fragment>
                {errorMsg}
                {spinner}
                {randomPlanetContent}
            </React.Fragment>
        )
    }
}

const PlanetView = ({ planet, imageUrl }) => {

    const { name, population, rotationPeriod, diameter } = planet

    return (
        <div className="random-planet">
            <div className="random-planet__picture">
                <img src={imageUrl} alt="Planet"/>
            </div>
            <div className="random-planet__description">
                <h3 className="random-planet__subtitle">{name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population: {population}</li>
                    <li className="list-group-item">Rotation Period: {rotationPeriod}</li>
                    <li className="list-group-item">Diameter: {diameter}</li>
                </ul>
            </div>
        </div>
    )
}
