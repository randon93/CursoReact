import React, { useState } from "react";
import PropTypes from "prop-types";

const counter = ({ value = 10 }) => {

  const [state, setState] = useState(value);

  const suma = () => {
    setState(state + 1);
  }

  const reset = () => {
    setState(10);
  }

  const resta = () => {
    setState(state - 1);
  }

  return (
    <>
      <h1>MStore</h1>
      <h2>{state}</h2>

      <>
        <button onClick={suma}> + </button>
        <button onClick={reset}> Reset </button>
        <button onClick={resta}> - </button>
      </>
    </>
  );
};

counter.propTypes = {
  value: PropTypes.number
}

export default counter;
