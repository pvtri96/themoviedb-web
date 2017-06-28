import React, { Component } from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../../src/containers/Master';
import MovieList from '../../src/components/movies/MovieList';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieListActions} from '../../src/redux/movies/movieList';
import Spinner from '../../src/components/Spinner';


class Index extends Component {
  static async getInitialProps({ store }) {
    await store.dispatch(movieListActions.fetchMovies());
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  render() {
    if(this.state.isLoading) {
      return (
        <Master>
          <Spinner />
        </Master>
      );
    }

    return (
      <Master>

        <div className="container pt-5">
          <MovieList />
        </div>
      </Master>
    );
  }
}


export default withRedux(getStore)(Index);
