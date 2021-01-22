import React from 'react';
import './SearchBar.css';
import Spotify from '../../util/Spotify';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.authorize = this.authorize.bind(this);
    }

    search(event) {
        this.props.onSearch(this.state.term);
        event.preventDefault();
    }

    handleTermChange(e) {
        this.setState({term: e.target.value})
    }

    authorize() {
        Spotify.getAccessToken();
    }

    render() {
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        let button;
        let input;
        if (!(accessTokenMatch && expiresInMatch)) {
            button = <button className="SearchButton" onClick = {this.authorize}>LOGIN</button>;
        } else {
            input = <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />;
            button = <button className="SearchButton" onClick={this.search}>SEARCH</button>;
        }

        return(
            <div className="SearchBar">
                {input}
                {button}
            </div>
        );
    }
};

export default SearchBar;