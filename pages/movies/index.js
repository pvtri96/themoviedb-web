import React, { Component } from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../../src/containers/Master';
import MovieList from '../../src/components/movies/MovieList';
// import withRedux from 'next-redux-wrapper';
// import { getStore } from '../../src/redux';
import { movieListActions } from '../../src/redux/movies/movieList';
import Spinner from '../../src/components/Spinner';

const Index = () => {
  return (
    <MovieList />
  );
}

export default Index;
