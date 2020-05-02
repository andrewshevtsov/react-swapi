import React from 'react'
import './toggle-planet.css'

const TogglePlanet = (props) => {

    return (
        <button type="button"
                onClick={props.onTogglePlanetView}
                className="toggle-planet btn btn-warning">
            Toggle Random Planet
        </button>
    )
}

export default TogglePlanet