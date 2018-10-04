import React, { Component } from 'react';
import MovieTable from './components/MovieTable';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles.css';

axios.defaults.baseURL = 'https://www.omdbapi.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      error: ''
    };
  }

  componentDidMount() {
    this.movieSearch('star wars');
  }

  movieSearch = async title => {
    try {
      const response = await axios.get('', {
        params: {
          s: title,
          apikey: 'f65ad398'
        }
      });
      await this.setState({
        searchResults: response.data.Search
      });
    } catch ({ message: error }) {
      this.setState({
        error
      });
    }
  };

  render() {
    const { searchResults, error } = this.state;

    return (
      <div className="App">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <MovieTable data={searchResults} />
        {error}
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
