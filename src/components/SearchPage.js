import React, {Component} from 'react';

import SearchForm from './SearchForm';
import Photo from './Photo';
import Nav from './Nav';
import apiKey from './config';

class SearchPage extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            // "photos" will receive and parse all json data from the Flickr API into objects and properties.
            photos: [],
            query: this.props.query
        };
        this.performSearch = this.performSearch.bind(this);
        this.changeSearchPageQuery = this.changeSearchPageQuery.bind(this);
    }

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query = this.state.query) => {
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

    changeSearchPageQuery(newSearchPageValue) {
        this.props.onChange(newSearchPageValue);
    } 

    // HREF links return a callback function upon being clicked via the onClick() event handler. 
    render() {

        return (
            <div className="container">
                <SearchForm secondOnChange={this.changeSearchPageQuery} />
                <Nav secondOnChange={this.changeSearchPageQuery} />
                <Photo data={this.state.photos} query={this.state.query} />
            </div>
        );
    }
}

export default SearchPage;