import React, { useEffect } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {

  useEffect(() => {
    props.onChange(props.query);
    // The following code below is used to disable a dependency error that arises due to performSearch() existing outside of useEffect().
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.query]);

  const results = props.data;
  let photosArray;
  // photosArray is mapped out with queried data if the Flickr API returns a result value greater than 1. 
  if (results.length > 0) {
    photosArray = results.map(photo =>
      <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title} />
    );
  } else {
    photosArray = <NotFound />
  }

  //console.log(props);

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

export default PhotoContainer;