import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Hucks = ({ value = 10 }) => {

    const [getState, setState] = useState(value);

    const suma = () => {
        setState( getState + 1 );
    };

    const resta = () => {
        setState( getState - 1);
    };

    const reset = () => {
        setState(value);
    };

    return (
        <div>
            <h1>{getState}</h1>  
            <button onClick={suma}>+</button>      
            <button onClick={reset}>reset</button>      
            <button onClick={resta}>-</button>      
        </div>
    )
}

Hucks.propTypes = {
    value: PropTypes.number
}

export default Hucks
