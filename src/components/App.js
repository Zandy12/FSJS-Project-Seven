import React, {Component} from 'react';

// App components
import SearchForm from './SearchForm';
import Nav from './Nav';
import Photo from './Photo';
import apiKey from './config';

class App extends Component {
    
    constructor() {
        super(); 
        this.state = {
            // "photos" will receive and parse all json data from the Flickr API into objects and properties.
            photos: [],
        };
    }

    performSearch = (query) => {
            fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(res => {
            this.setState({
                photos: res.photos.photo,
            });
            })
            // This will log an error if there was an issue fetching the data from flickr API.
            .catch(error => {
            console.log("Error fetching and parsing data", error);
            this.setState({found: true});
        });
    }

    render() {
        // Default page layout
        return(
            <div className="container">
                <SearchForm onSearch={this.performSearch} />
                <Nav onSearch={this.performSearch} />
                <Photo data={this.state.photos} />
            </div>
        );         
    }
}
export default App;
