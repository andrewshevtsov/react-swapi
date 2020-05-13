import React, { Component } from 'react'
import Row from '../row'
import { PlanetList, PlanetDetails } from '../sw-components'

export default class PlanetsPage extends Component {

    state = {
        selectedItem: 8
    }

    onPlanetSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        const { selectedItem } = this.state
        return (
            <Row
                left={<PlanetList onItemSelected={this.onPlanetSelected}/>}
                right={< PlanetDetails itemId={selectedItem} />}
            />
        )
    }
}