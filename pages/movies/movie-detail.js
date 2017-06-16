
import React, { Component } from 'react';
import MovieDetailShowing from '../../src/components/movies/MovieDetailShowing';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../../src/redux';

const MovieDetail = (props) =>  (
  <Master>
    <div>
      <MovieDetailShowing id={props.url.query.id} />
    </div>
  </Master>
);

export default  withRedux(initStore)(MovieDetail);


