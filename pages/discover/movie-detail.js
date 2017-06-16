import React from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../../src/containers/Master';
import MovieDetail from '../../src/components/discover/MovieDetail';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../src/redux';

const Movie_Detail = props => {
  return (
    <Master>
      <div>
        <div>
          <MovieDetail id={props.url.query.id}>
          </MovieDetail>
        </div>
      </div>
    </Master>
  );
};

Movie_Detail.propTypes = {

};

export default withRedux(initStore)(Movie_Detail);
