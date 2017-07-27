import React, {Component} from 'react';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../../src/containers/Master';
// import ListTVShows from '../../src/components/list/ListTVShows';
import {getStore} from '../../src/redux';
import withRedux from 'next-redux-wrapper';
import List from '../../src/components/listViews/ListTvShows';
import {tvshowsActions} from '../../src/redux/tvshows/list';
import { menuActions } from '../../src/redux/menu';



class Index extends Component {

  static async getInitialProps ({ store }) {
    await store.dispatch(tvshowsActions.fetchTVshowPopular());
    store.dispatch(menuActions.fetchMenu("tvshows"));
  }

  render(){
    return (
      <Master >
        <List></List>
      </Master>
    );
  }
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 100);
    this.props.fetchTvShowGenres();
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    fetchTvShowGenres: () => dispatch(tvshowsActions.fetchTvShowGenres())
  }
};

export default withRedux(getStore, undefined, mapDispatchToProps)(Index);
