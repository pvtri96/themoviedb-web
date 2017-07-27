import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../../../src/containers/Master';
// import ListTVShows from '../../src/components/list/ListTVShows';
import {getStore} from '../../../src/redux';
import withRedux from 'next-redux-wrapper';
import List from '../../../src/components/listViews/ListMovies';
import { movieListActions } from '../../../src/redux/movies/list';
import { menuActions } from '../../../src/redux/menu';
import { movieListActionTypes } from '../../../src/redux/movies/list';


class Index extends Component {

  static async getInitialProps ({ store }) {
    await store.dispatch(movieListActions.fetchMovieNowPlaying());
    store.dispatch(menuActions.fetchMenu("movies"));
    store.dispatch(menuActions.fetchSubMenu(movieListActionTypes.NOW_PLAYING));
  }
  render(){
    return (
      <Master >
        <List></List>
      </Master>
    );
  }
}
export default withRedux(getStore)(Index);
