import React, { useState } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import TogglePlanet from '../toggle-planet'

export default function() {

    let [planetIsVisible, setplanetIsVisible] = useState(true)
    let [selected, setSelected] = useState(4)

    const onTogglePlanetView = () => {
        setplanetIsVisible(!planetIsVisible)
    }

    const onPersonSelected = (id) => {
        setSelected(selected = id)
    }

    const randomPlanetView = planetIsVisible ? <RandomPlanet /> : null

    return (
        <div className="container">
            <Header />
            <TogglePlanet onTogglePlanetView={onTogglePlanetView}/>
            { randomPlanetView }
            <div className="row mb2">
                <div className="col-md-4">
                    <ItemList onItemSelected={onPersonSelected}/>
                </div>
                <div className="col-md-8">
                    <PersonDetails personId={selected}/>
                </div>
            </div>
        </div>
    )
}