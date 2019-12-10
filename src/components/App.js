import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

// App components
//import SearchForm from './SearchForm';
//import Nav from './Nav';
//import Photo from './Photo';
//import apiKey from './config';
import SearchPage from './SearchPage';

class App extends Component {

    constructor() {
        super();
        this.state = {
            query: 'cars'
        }
        this.changeMainQuery = this.changeMainQuery.bind(this);
    }

    changeMainQuery(newMainValue) {
        this.setState({query: newMainValue});
    }

    // Default page layout
    render() {

        return(
            <BrowserRouter>
                <Redirect from="/" to={`/?search=${this.state.query}`} />
                <Route path="/" component={ () => <SearchPage query={this.state.query} onChange={this.changeMainQuery} />} />
            </BrowserRouter>
        );         
    }
}
export default App;
