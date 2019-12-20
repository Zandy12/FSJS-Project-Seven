import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// App components
import SearchForm from './SearchForm';
import Nav from './Nav';
import Photo from './Photo';
import apiKey from './config';
//import SearchPage from './SearchPage';

class App extends Component {

    constructor() {
        super(); 
        this.state = {
            // "photos" will receive and parse all json data from the Flickr API into objects and properties.
            photos: []
        };
        this.performSearch = this.performSearch.bind(this);
    }

    performSearch = (query) => {
            fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(res => {
            this.setState({
                    photos: res.photos.photo
                });
            })
            // This will log an error if there was an issue fetching the data from flickr API.
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
                    <Switch>
                        <Route exact path="/" render={ () => <Photo data={this.state.photos} onChange={this.performSearch} /> } />
                        <Route path="/:query" render={ ({match}) => <Photo query={match.params.query} data={this.state.photos} onChange={this.performSearch} /> } />
                    </Switch>
                </div>
                {/*This code is old and is no longer being used. It is here for reference only.*/}
                {/*<Redirect from="/" to={`/?search=${this.state.query}`} />*/}
                {/*<Route path="/" component={ () => <SearchPage query={this.state.query} onChange={this.changeMainQuery} />} />*/}
            </BrowserRouter>
        );         
    }
}
export default App;
