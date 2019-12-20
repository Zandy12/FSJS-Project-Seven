import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route} from 'react-router-dom';

// App components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import apiKey from './config';
//import SearchPage from './SearchPage';

class App extends Component {

    constructor() {
        super(); 
        this.state = {
            // "photos" will receive and parse all json data from the Flickr API into objects and properties.
            photos: [],
            loading: true
        };
        this.performSearch = this.performSearch.bind(this);
    }

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query = 'cars') => {
            // Fetch API
            /* fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(res => {
            this.setState({
                    photos: res.photos.photo,
                    loading: false
                });
            })
            // This will log an error if there was an issue fetching the data from flickr API.
            .catch(error => {
            console.log("Error fetching and parsing data", error); 
        });*/
            // Axios 
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
			.then(res =>
				this.setState({
                    photos: res.data.photos.photo,
                    loading: false
				})
			)
			.catch(error => {
				console.log("Error fetching and parsing data", error);
			});
    }

    // Default page layout
    render() {

        return(
            <BrowserRouter>
                <div className="container">
                    <SearchForm />
                    <Nav />
                    {(this.state.loading) ? <Route exact path="/" render={ () => <p>Loading...</p> } /> : <Route exact path="/" render={ () => <PhotoContainer onChange={this.performSearch} data={this.state.photos} /> } />} 
                    <Route path="/:query" render={ ({match}) => <PhotoContainer query={match.params.query} onChange={this.performSearch} data={this.state.photos} /> } />
                </div>
                {/*This code is old and is no longer being used. It is here for reference only.*/}
                {/*<Redirect from="/" to={`/?search=${this.state.query}`} />*/}
                {/*<Route path="/" component={ () => <SearchPage query={this.state.query} onChange={this.changeMainQuery} />} />*/}
            </BrowserRouter>
        );         
    }
}
export default App;
