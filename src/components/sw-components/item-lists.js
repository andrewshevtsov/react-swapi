import React from 'react'
import ItemList from '../item-list'
import { withData, withSwapiService } from '../hoc-helper'

const withChildFunction = (fn) => (Wrapped) => {

    return (props) => {
        return (
            <Wrapped { ...props }>
                { fn }
            </Wrapped>
        )
    }
}

const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapiService) => {
    return {
        fetchData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        fetchData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        fetchData: swapiService.getAllStarships
    }
}

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                        withData(
                            withChildFunction(renderName)(
                                ItemList)))

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                        withData(
                            withChildFunction(renderName)(
                                ItemList)))

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                        withData(
                            withChildFunction(renderModelAndName)(
                                ItemList)))

export {
    PersonList,
    PlanetList,
    StarshipList
}