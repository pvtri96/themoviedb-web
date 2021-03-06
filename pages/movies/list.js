import List from '../../src/components/listViews/ListMovies';
import Master from '../../src/containers/Master';
import React , {Component} from 'react';
import { movieListActions } from '../../src/redux/movies/list';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import Loading from '../../src/components/Loading';
import {menuActions} from '../../src/redux/menu';
class Index extends Component {

  static async getInitialProps ({ store }) {
    await store.dispatch(movieListActions.fetchMoviePopular());
    store.dispatch(menuActions.fetchMenu("movies"));
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  // didmount chi chay 1 lan nen khi click vao movies se chi render tren server
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 100);
    this.props.fetchGenres();
  }


  render() {

    return (
      <Master>
        <List />
      </Master>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGenres: () => dispatch(movieListActions.fetchGenres()),
  };
};

Index.propTypes = {

};

export default withRedux(getStore, undefined, mapDispatchToProps)(Index);

