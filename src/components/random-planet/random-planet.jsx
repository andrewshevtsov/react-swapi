import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
/* import Spinner from '../spinner' */
import './random-planet.css'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        planet: {}
    }

    constructor() {
        super()
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet })
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2
        this.swapiService
            .getPlanet(id)
            .then( this.onPlanetLoaded )
    }

    render() {

        // const defaultImageUrl = 'https://loremflickr.com/320/240/dog'
        const { planet: {id, name, population, rotationPeriod, diameter} } = this.state

        // console.log(id)

        // const planetImageUrl = async function() {
        //     let response = await fetch(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`)
        //     console.log(response.status)
        // }

        // planetImageUrl().catch(err => console.log(err))

        return (
            <div className="random-planet">
                <div className="random-planet__picture">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet"/>
                </div>
                <div className="random-planet__description">
                    <h3 className="random-planet__subtitle">{name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Population: {population}</li>
                        <li className="list-group-item">Rotation Period: {rotationPeriod}</li>
                        <li className="list-group-item">Diameter: {diameter}</li>
                    </ul>
                </div>
                {/* <Spinner /> */}
            </div>
        )
    }
}
