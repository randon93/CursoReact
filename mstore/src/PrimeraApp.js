import React from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ( { value } ) => {
    return (
        <div>
            <h1>ConuterApp</h1>
            <h2>{ value }</h2>

            <button onClick={ ()=>{
                
            } }>Click aca perros +1 </button>
        </div>
    )
}

PrimeraApp.propTypes = {
    value: PropTypes.number
}

export default PrimeraApp;
