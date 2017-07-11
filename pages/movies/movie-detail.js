
import React ,{ Component }from 'react';
import MovieDetail from '../../src/components/detail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieActions } from '../../src/redux/movies/movie';
import PropTypes from 'prop-types';
import Loading from '../../src/components/Loading';

class Index extends Component {

  static async getInitialProps({ isServer,  store, query }) {
    // window.scrollTo(0,0);
    if(!isServer)
    {
      await store.dispatch(movieActions.fetchMovieNonSR(store.getState().movies.current));
    }
    if(isServer) {
      await store.dispatch(movieActions.fetchMovieSR(query.id));
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

  componentDidMount() {
    window.scrollTo(0,0);
    console.log(this.props.isServer);
    setTimeout(() => this.setState({ isLoading: false }), 500);
    this.props.fetchMovieDetail(this.props.url.query.id);
  }

  render(){
    if(this.state.isLoading) {
      return (
        <Master>
          <Loading />
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

