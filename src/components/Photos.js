import React from 'react';

const Photos = props => {

    // Renders the url parameter passed via props from it's initial markup in Photo.js.
    return (
        <li>
            <img src={props.url} alt={props.title} />
        </li>
    );
}

export default Photos;