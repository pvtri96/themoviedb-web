import React,{Component} from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../../src/containers/Master';
import MovieDetail from '../../src/components/discover/MovieDetail';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import {movieDetailActions} from '../../src/redux/discover/movieDetail';

class Movie_Detail extends Component {
  static async getInitialProps({store, query}) {
    await store.dispatch(movieDetailActions.fetchMovieDetail(query.id));
  }
  render (){
    return (
      <Master>
        <div>
          <div>
            <MovieDetail/>
          </div>
        </div>
      </Master>
    );
  }
}

Movie_Detail.propTypes = {

};

export default withRedux(getStore)(Movie_Detail);
