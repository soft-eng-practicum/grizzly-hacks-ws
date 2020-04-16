import React from 'react';
import './App.css';
import {Link} from "react-router-dom"
//import { Breadcrumb, Ref } from 'semantic-ui-react'

function Nav() {
    // Some styling
const navStyle = {
    color: 'white'
};


  return (
    <nav> 

            <ul className = "nav-links">
                {/* This <Link> will help us make the Nav bar functional and actually useful. style= {NavStyle} is just some styling we are using 
                the "to" is what we are linking it to
                */}
            <Link 
                style ={navStyle} 
                to = "/Home"
            >
                <li>
                    Home
                </li>
                </Link>

                <Link 
                    style ={navStyle}  
                    to = "/FAQ" 
                >
                <li> FAQ </li> 
                </Link>

            <Link 
                style ={navStyle} 
                to ="/schedule"
            >
        <li>Schedule</li>
        </Link>

        <Link 
            style ={navStyle}  
            to = "/sponsor"
        >
                <li>
                    Sponsors
                </li>
                </Link>

                <Link 
                    style ={navStyle}  
                    to = "/about"
                >
                <li>
                    About
                </li>
                </Link>
            </ul>
     </nav>
  );
}

export default Nav;
