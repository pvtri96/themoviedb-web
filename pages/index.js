import React from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../src/containers/Master';
import MovieListShowing from '../src/components/Movies/MovieListShowing';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../src/redux';


const Index = props => {
  return (
    <Master>
      <div>
        <MovieListShowing />
      </div>
    </Master>
  );
};


export default withRedux(initStore)(Index);
