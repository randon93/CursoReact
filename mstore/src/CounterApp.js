import React from "react";
import PropTypes from "prop-types";

const counter = ({ value = "Sin valor" }) => {
  return (
    <>
      <h1>MStore</h1>
      <h2>{value}</h2>
    </>
  );
};

counter.propTypes = {
    value: PropTypes.string
}

export default counter;
