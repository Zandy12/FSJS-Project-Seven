import React, {Component} from 'react';

class Nav extends Component {

    // HREF links return a callback function upon being clicked via the onClick() event handler. 
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        this.props.onSearch('fields');
                    }}>Fields</a></li>
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        this.props.onSearch('skies');
                    }}>Skies</a></li>
                    <li><a href="#" onClick={(e) => {
                        e.preventDefault();
                        this.props.onSearch('stars');
                    }}>Stars</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;