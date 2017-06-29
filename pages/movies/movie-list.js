import MovieList from '../../src/components/movies/MovieList';
import Master from '../../src/containers/Master';
import React , {Component} from 'react';
import { movieListActions } from '../../src/redux/movies/movieList';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import Spinner from '../../src/components/Spinner';

class Index extends Component {

  static async getInitialProps ({ store }) {
    await store.dispatch(movieListActions.fetchMovies());
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
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

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }
}


Index.propTypes = {

};

export default withRedux(getStore)(Index);

