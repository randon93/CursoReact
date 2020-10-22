import React from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ( { value, parrafo } ) => {
    return (
        <div>
            <h1>ConuterApp</h1>
            <h2>{ value }</h2>
            <p>{ parrafo }</p>
        </div>
    )
}

PrimeraApp.propTypes = {
    value: PropTypes.string
}
PrimeraApp.defaultProps = {
    parrafo: 'ACA VA UN PARRFO'
}

export default PrimeraApp;
