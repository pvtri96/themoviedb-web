import React, { Component } from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../../src/containers/Master';
import MovieList from '../../src/components/movies/MovieList';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieListActions} from '../../src/redux/movies/movieList';


class Index extends Component {
  static async getInitialProps({ store }) {
    await store.dispatch(movieListActions.fetchMovies());
  }
  render() {
    return (
      <Master>
        <div>
          <MovieList />
        </div>
      </Master>
    );
  }
}


export default withRedux(getStore)(Index);
