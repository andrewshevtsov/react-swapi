import React from 'react'

import ItemDetails, { Record } from '../item-details/item-details'
import { withSwapiService } from '../hoc-helper'

const StarshipDetails = (props) => {

    return (
        <ItemDetails { ...props }>
            <Record field="name" label="Name" />
            <Record field="length" label="Length" />
            <Record field="manufacturer" label="Manufacturer" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {

    return {
        fetchData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails)