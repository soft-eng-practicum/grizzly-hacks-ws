import React, { Component } from "react";
import "./App.css";

/**
 * A React element that shows an error page when page cannot be found.
 * @param {*} location
 */
function noMatch({ location }) {
  return (
    <div className="wrongPage">
      <h3>
        404 - No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default noMatch;
