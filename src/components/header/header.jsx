import React from "react";
import { Link } from "react-router-dom";
import './header.css';

function Header() {
    return( 
        <div className="header">
            <div className="logo">D <span>S</span>C</div>
            <div className="input">
                <input type="text"  placeholder="Search here..."/>
            </div>

            <div className="btns">
                <Link to={'/login'}><button>Login</button></Link>
                <Link to={'/register'}><button>Register</button></Link>
            </div>
        </div>
    )
}

export default Header;