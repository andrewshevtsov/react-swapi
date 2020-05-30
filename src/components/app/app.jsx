import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    SecretPage,
    LoginPage } from '../pages'

import ErrorIndicator from '../error-indicator'
import ErrorBoundry from '../error-boundry'

import DummySwapiService from '../../services/dummy-swapi-service'
import SwapiService from '../../services/swapi-service'
import { SwapiServiceProvider } from '../swapi-service-context'

import './app.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { StarshipDetails } from '../sw-components'

export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
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

        const { hasError, isLoggedIn } = this.state

        if (hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="container">
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />
                            <Switch>
                                <Route path="/"
                                        render={() => <h2 className="welcome">Welcome To StarDB App</h2>}
                                        exact />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" component={PlanetsPage} />
                                <Route path="/starships" component={StarshipsPage} exact />
                                <Route path="/starships/:id"
                                        render={({match}) => {
                                                const { id } = match.params
                                                return <StarshipDetails itemId={id} />
                                            }
                                        }/>
                                <Route
                                    path="/login"
                                    render={() => (
                                        <LoginPage
                                            onLogin={this.onLogin}
                                            isLoggedIn={isLoggedIn} />
                                    )} />
                                <Route
                                    path="/secret"
                                    render={() => (
                                        <SecretPage isLoggedIn={isLoggedIn} />
                                    )} />

                                <Route render={() => <h2 className="mt-4">Page not found</h2>} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}
