import React from 'react'
import ItemList from '../item-list'
import { 
    withData, 
    withSwapiService,
    withChildFunction,
    compose } from '../hoc-helper'

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

const PersonList = compose(
                        withSwapiService(mapPersonMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList)

const PlanetList = compose(
                        withSwapiService(mapPlanetMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                    )(ItemList)

const StarshipList = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildFunction(renderModelAndName)
                    )(ItemList)

export {
    PersonList,
    PlanetList,
    StarshipList
}