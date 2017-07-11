import MovieList from '../../src/components/list';
import Master from '../../src/containers/Master';
import React , {Component} from 'react';
import { movieListActions } from '../../src/redux/movies/movieList';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import Loading from '../../src/components/Loading';

class Index extends Component {

  static async getInitialProps ({ store, isServer  }) {
    await store.dispatch(movieListActions.fetchMoviesSR());

  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  // didmount chi chay 1 lan nen khi click vao movies se chi render tren server

  componentDidMount() {

    setTimeout(() => this.setState({ isLoading: false }), 500);
    this.props.fetchMovies();
  }


  render() {
    if(this.state.isLoading) {
      return (
        <Master>
          <Loading />
        </Master>
      );
    }
    return (
      <Master>
        <div className="container">
          <MovieList />
        </div>
      </Master>
    );
  }


}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(movieListActions.fetchMovies())
  };
};

Index.propTypes = {

};

export default withRedux(getStore, undefined, mapDispatchToProps)(Index);

