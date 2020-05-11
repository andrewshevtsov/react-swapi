import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import { 
    PeoplePage,
    PlanetsPage,
    StarshipsPage } from '../pages'

import ErrorIndicator from '../error-indicator'
import ErrorBoundry from '../error-boundry'

import DummySwapiService from '../../services/dummy-swapi-service'
import SwapiService from '../../services/swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context'

import './app.css'

export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService()
    }

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            }
        })
    }

    componentDidCatch() {
        console.log('componentDidCatch')
        this.setState({
            hasError: true
        })
    }

    render() {

        const { hasError } = this.state

        if (hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="container">

                        <Header onServiceChange={this.onServiceChange} />

                        <RandomPlanet />

                        <PeoplePage />

                        <PlanetsPage />

                        <StarshipsPage />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}
