import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import './random-planet.css'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
    }

    constructor() {
        super()
        this.updatePlanet()
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*25 + 2)
        this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                })
            })
    }

    render() {

        const { id, name, population, rotationPeriod, diameter } = this.state

        return (
            <div className="random-planet">
                <div className="random-planet__picture">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet"/>
                </div>
                <div className="random-planet__description">
                    <h3 className="random-planet__subtitle">{name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{population}</li>
                        <li className="list-group-item">{rotationPeriod}</li>
                        <li className="list-group-item">{diameter}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
