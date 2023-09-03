import React from "react";
import "../styles/spinner.css";
const Spinner = () => {
  return (
    <>
      <div className="spinner d-flex">
        <h4>
          <i className="fa fa-fw fa-check" />
        </h4>
      </div>
      <div className="adjust">
        <div className="loader2" />
      </div>
    </>
  );
};

export default Spinner;
