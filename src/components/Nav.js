import React, {Component} from 'react';

class Nav extends Component {

    // HREF links return a callback function upon being clicked via the onClick() event handler. 
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><button className="custom" onClick={(e) => {
                        e.preventDefault();
                        this.props.onSearch('fields');
                    }}>Fields</button></li>
                    <li><button className="custom" href="#" onClick={(e) => {
                        e.preventDefault();
                        this.props.onSearch('skies');
                    }}>Skies</button></li>
                    <li><button className="custom" href="#" onClick={(e) => {
                        e.preventDefault();
                        this.props.onSearch('stars');
                    }}>Stars</button></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;