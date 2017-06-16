import Master from '../src/containers/Master';
import Details from '../src/components/movie-details/Details';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../src/redux';
import React from 'react';

const MovieDetails = (props) => (
  <Master>
    <div>
      <Details id={ props.url.query.id } />
    </div>
  </Master>
)

export default withRedux(initStore)(MovieDetails);

