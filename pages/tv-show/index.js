import React from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../../src/containers/Master';
import ListMovies from '../../src/components/list/ListMovies';
import {getStore} from '../../src/redux';
import withRedux from 'next-redux-wrapper';

const Index = () => {
  return (
    <Master>
      <div>
        <ListMovies></ListMovies>
      </div>
    </Master>
  );
};

Index.propTypes = {

};

export default withRedux(getStore)(Index);
