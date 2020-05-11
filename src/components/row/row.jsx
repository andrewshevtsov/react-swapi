import React from 'react'

const Row = ({ left, right }) => {

    return (
        <div className="row mb-4 mt-4">
            <div className="col-md-4">
                { left }
            </div>
            <div className="col-md-8">
                { right }
            </div>
        </div>
    )
}

export default Row