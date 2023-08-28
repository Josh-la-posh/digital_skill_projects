import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

function Nav() {
    return( 
        <div className="nav">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/project'}>Project</Link></li>
                <li><Link to={'/contact'}>Contact Us</Link></li>
                <li><Link to={'/services'}>Services</Link></li>
            </ul>
        </div>
    )
}

export default Nav;