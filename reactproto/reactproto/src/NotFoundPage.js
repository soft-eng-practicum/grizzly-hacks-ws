import React, { Component } from 'react'
import './App.css';

const style= {
    color: 'red'    
};

function noMatch({ location }) {
    return (
      <div className = "wrongPage" >
        <h3>
          404 - No match for <code>{location.pathname}</code>
        </h3>
      </div>
    )
  }

  export default noMatch;