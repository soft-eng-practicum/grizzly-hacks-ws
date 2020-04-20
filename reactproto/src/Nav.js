import React from 'react';
import './App.css';
import {Link} from "react-router-dom"


/**
 * Nav is a React element called by App.js. This element creates the navbar.
 * Nav calls css elements from App.css for formating and hover features
 */
function Nav() {

    /**
     * The <Link> will help us make the Nav bar functional and actually useful. style= {NavStyle} is just some 
     * styling we are using the "to" is what we are linking it to
     */
    return (
        <nav id = "navbar"> 

            <ul id = "nav-links">
                    {/* This <Link> will help us make the Nav bar functional and actually useful. 
                    style= {NavStyle} is just some styling we are using the "to" is what we are linking it to.
                    */}
                <Link id = "nav-links-indv" to = "/Home">
                    <li>
                        <i class="home"></i>
                        Home
                    </li>
                </Link>

                <Link id = "nav-links-indv" to = "/FAQ" >
                    <li> 
                        FAQ 
                    </li> 
                </Link>

                <Link id = "nav-links-indv" to ="/schedule">
                    <li>
                        Schedule
                    </li>
                </Link>

                <Link  id = "nav-links-indv"  to = "/sponsor">
                    <li>
                        Sponsors
                    </li>
                 </Link>

                <Link id = "nav-links-indv" to = "/about">
                    <li>
                        About
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
