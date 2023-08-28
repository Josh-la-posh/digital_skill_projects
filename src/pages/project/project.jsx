import React from "react";
import './project.css';
import { Link } from "react-router-dom";

function Project() {
    return( 
        <div className="project">
            <h1>This is the list of projects we have</h1>

            <ul>
                <li><Link to={'/todo'}>To-do App</Link></li>
            </ul>
        </div>
    )
}

export default Project;