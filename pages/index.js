import React from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../src/containers/Master';
import DiscoverMovies from '../src/components/Discover/DiscoverMovies';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../src/redux';

const Index = props => {
  return (
    <Master>
      <div>
        <div>
            <DiscoverMovies> </DiscoverMovies>
        </div>
      </div>
    </Master>
  );
};

Index.propTypes = {

};

export default withRedux(initStore)(Index);
