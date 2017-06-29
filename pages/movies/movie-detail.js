
import React ,{ Component }from 'react';
import MovieDetail from '../../src/components/movies/detail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieActions } from '../../src/redux/movies/movie';
import PropTypes from 'prop-types';
import Spinner from '../../src/components/Spinner';

class Index extends Component {

  static async getInitialProps({  store, query }) {
    await store.dispatch(movieActions.fetchMovieSR(query.id));
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.fetchMovieDetail(this.props.url.query.id);
    setTimeout(() => this.setState({ isLoading: false }), 500);
  }

  render(){
    if(this.state.isLoading) {
      return (
        <Master>
          <Spinner />
        </Master>
      );
    }
    return (
      <Master>
        <MovieDetail  />
      </Master>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {};
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetail : (id) => dispatch(movieActions.fetchMovieDetail(id))
  };
};

Index.propTypes = {
  fetchMovieDetailReload: PropTypes.func,
  url: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default withRedux(getStore, mapStateToProps, mapDispatchToProps)(Index);

