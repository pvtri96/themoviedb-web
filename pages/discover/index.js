import React, {Component} from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../../src/containers/Master';
import DiscoverMovies from '../../src/components/discover/DiscoverMovies';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import {moviesActions} from '../../src/redux/discover/movie';

class Index extends Component{
  static async getInitialProps ({store}){
    await store.dispatch(moviesActions.fetchMovies());
  }
  render (){
    return (
      <Master>
        <div>
          <div>
            <DiscoverMovies> </DiscoverMovies>
          </div>
        </div>
      </Master>
    );
  }
}

Index.propTypes = {

};

export default withRedux(getStore)(Index);
