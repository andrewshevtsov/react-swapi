import React, { Component } from 'react'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'
import ErrorButton from '../error-button'
import './item-details.css'

const Record = ({item, field, label}) => {

    return (
        <li className="item-details__item list-group-item">
            <p className="item-text">{ label }</p>
            <span>{ item[field] }</span>
        </li>
    )
}

export {
    Record
}


export default class ItemDetails extends Component {

    swapiService = new SwapiService()

    state = {
        item: null,
        loading: true,
        error: false,
        image: null
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.fetchData !== prevProps.fetchData ||
            this.props.getImageUrl !== prevProps.getImageUrl ) {
            this.updateItem()
        }
    }

    updateItem() {

        const { itemId, fetchData, getImageUrl } = this.props

        if (!itemId) {
            return
        }

        fetchData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false
                })
            })
            .catch(this.onError)
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {

        if (!this.state.item) {
            return <h4 className="mt-4">Select a item in item list</h4>
        }

        const { item, loading, error, image } = this.state

        const hasData = !(loading && error)
        const errorMessage = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Spinner /> : null
        const itemView = hasData ? <ItemView
                                        item={item}
                                        image={image}
                                        children={this.props.children} /> : null

        return (
            <div className="item-details mt-4">
                {errorMessage}
                {spinner}
                {itemView}
            </div>
        )
    }
}

const ItemView = ({ item, image, children }) => {

    const { name } = item

    return (
        <React.Fragment>
            <div className="item-details__picture">
                <img src={image} alt="item"/>
            </div>
            <div className="item-details__description">
                <h3 className="item-details__subtitle mt-4">{name}</h3>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child, idx) => {
                            return React.cloneElement(child, { item })
                        })
                    }
                </ul>
                <ErrorButton />
            </div>
        </React.Fragment>
    )
}
