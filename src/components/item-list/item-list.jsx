import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import './item-list.css'

export default class ItemList extends Component {

    swapiService = new SwapiService()

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({ peopleList })
            })
    }

    renderItems(arr) {
        return arr.map( ({id, name}) => {
            return (
                <li className="list-group-item"
                    onClick={() => {this.props.onItemSelected(id)}}
                    key={id}>

                    {name}
                </li>
            )
        })
    }

    render() {

        const { peopleList } = this.state

        if (!peopleList) {
            return <Spinner />
        }

        const peoples = this.renderItems(peopleList)

        return (
            <ul className="item-list list-group">
                {peoples}
            </ul>
        )
    }
}
