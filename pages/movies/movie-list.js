import MovieList from '../../src/components/movies/list';
import Master from '../../src/containers/Master';
import React , {Component} from 'react';
import { movieListActions } from '../../src/redux/movies/movieList';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import Spinner from '../../src/components/Spinner';

class Index extends Component {

  static async getInitialProps ({ store, isServer  }) {
    if(isServer){
      await store.dispatch(movieListActions.fetMoviesSR());
    }

    return {
      isServer
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  // didmount chi chay 1 lan nen khi click vao movies se chi render tren server

  componentDidMount() {
    this.props.fetchMovies();
    setTimeout(() => this.setState({ isLoading: false }), 500);

  }


  render() {
    if(this.state.isLoading) {
      return (
        <Master>
          <Spinner />
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

