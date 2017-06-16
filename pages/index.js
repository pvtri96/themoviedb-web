
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../src/containers/Master';
import MovieListShowing from '../src/components/movies/MovieListShowing';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../src/redux';
import { MovieListActionCreators } from '../src/redux/movies/movieList';


class Index extends Component {

  render() {
    return (
      <Master>
        <div>
          <MovieListShowing />
        </div>
      </Master>
    );
  }
}


export default withRedux(initStore)(Index);
