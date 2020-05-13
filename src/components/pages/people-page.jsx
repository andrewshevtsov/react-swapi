import React, { Component } from 'react'
import Row from '../row'
import { PersonList, PersonDetails } from '../sw-components'

export default class PeoplePage extends Component {

    state = {
        selectedItem: 4
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        const { selectedItem } = this.state
        return (
            <Row
                left={<PersonList onItemSelected={this.onPersonSelected} />}
                right={< PersonDetails itemId={selectedItem} />}
            />
        )
    }
}