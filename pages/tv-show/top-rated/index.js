import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../../../src/containers/Master';
// import ListTVShows from '../../src/components/list/ListTVShows';
import {getStore} from '../../../src/redux';
import withRedux from 'next-redux-wrapper';
import List from '../../../src/components/listViews/List';
import { tvshowsActions} from '../../../src/redux/tvshows/list';
import { menuActions } from '../../../src/redux/menu';
import { tvshowsActionsTypes } from '../../../src/redux/tvshows/list';


class Index extends Component {

  static async getInitialProps ({ store }) {
    await store.dispatch(tvshowsActions.fetchTVshowTopRated());
    store.dispatch(menuActions.fetchMenu("tvshows"));
    store.dispatch(menuActions.fetchSubMenu(tvshowsActionsTypes.TOP_RATED));
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
