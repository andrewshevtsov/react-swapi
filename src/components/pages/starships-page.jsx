import React, { Component } from 'react'
import Row from '../row'
import { StarshipList, StarshipDetails } from '../sw-components'

export default class StarshipsPage extends Component {

    state = {
        selectedItem: 10
    }

    onStarshipSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        const { selectedItem } = this.state
        return (
            <Row
                left={<StarshipList onItemSelected={this.onStarshipSelected} />}
                right={< StarshipDetails itemId={selectedItem} />}
            />
        )
    }
}