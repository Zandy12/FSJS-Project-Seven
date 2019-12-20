import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {

    // HREF links return a callback function upon being clicked via the onClick() event handler. 
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/fields">Fields</NavLink></li>
                    <li><NavLink to="/skies">Skies</NavLink></li>
                    <li><NavLink to="/stars">Stars</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;