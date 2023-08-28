import React from "react";
import './header.css';

function Header() {
    return( 
        <div className="header">
            <div className="logo">D <span>S</span>C</div>
            <div className="input">
                <input type="text"  placeholder="Search here..."/>
            </div>

            <div className="btns">
                <button>Login</button>
                <button>SIgn Up</button>
            </div>
        </div>
    )
}

export default Header;