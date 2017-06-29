import Movies from './movies';
import Master from '../src/containers/Master';
import React , {Component} from 'react';
import { movieListActions } from '../src/redux/movies/movieList';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../src/redux';
import Spinner from '../src/components/Spinner';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
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
          <Movies />
        </div>
      </Master>
    );
  }
};

Index.getInitialProps = async ({ store }) => {
  await store.dispatch(movieListActions.fetchMovies());
}

Index.propTypes = {

};

export default withRedux(getStore)(Index);

