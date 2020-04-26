import React from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'

export default function() {
    return (
        <div className="container">
            <Header />
            <RandomPlanet />
            <ItemList />
            <PersonDetails />
        </div>
    )
}