import React, {Component} from 'react';

class NotFound extends Component {
    
    // Render "Not Found" JSX markup if "this.performSearch" doesn't return suffice results from the Flickr API.
    render() {
        return(
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>
        );
    }
}

export default NotFound;