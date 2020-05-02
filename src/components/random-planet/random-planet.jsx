import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import './random-planet.css'
import ErrorIndicator from '../error-indicator'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: true,
        imageUrl: '',
        error: false
    }

    componentDidMount() {
        this.updatePlanet()
        // this.interval = setInterval(this.updatePlanet, 10000);
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
        const randomPlanetContent = hasData ? <PlanetView planet={planet} imageUrl={imageUrl}/> : null

        return (
            <div className="random-planet">
                {errorMsg}
                {spinner}
                {randomPlanetContent}
            </div>
        )
    }
}

const PlanetView = ({ planet, imageUrl }) => {

    const { name, population, rotationPeriod, diameter } = planet

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}