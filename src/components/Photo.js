import React from 'react';
import Photos from './Photos';
import NotFound from './NotFound';

const Photo = props => {

    const results = props.data;
    let photosArray;
    // photosArray is mapped out with queried data if the Flickr API returns a result value greater than 1. 
    if (results.length > 0) {
      photosArray = results.map(photo =>
        <Photos url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>
      );
    } else {
      photosArray = <NotFound />
    }

    // Format for URL in JSX markup
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

    // Render the final photosArray into the JSX markup.
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photosArray}
        </ul>
      </div>
    );
  }

  export default Photo;