
import React ,{ Component }from 'react';
import MovieDetail from '../../src/components/movies/detail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieActions } from '../../src/redux/movies/movie';
import PropTypes from 'prop-types';
import Spinner from '../../src/components/Spinner';

let isReload = true;
class Index extends Component {

  static async getInitialProps({ isServer, store, query }) {
    if(isServer){
      await store.dispatch(movieActions.fetchMovieDetail(query.id, true));
    }
    return {
      isServer,
    };



  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    console.log(this.props.isServer);

    if(!this.props.isServer)
    {
      console.log("Did mount");
      this.props.fetchMovieDetail(this.props.url.query.id, false);
    }

    setTimeout(() => this.setState({ isLoading: false }), 2000);
  }

  render(){
    isReload = !isReload;
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
    fetchMovieDetail : (id, isServer) => dispatch(movieActions.fetchMovieDetail(id,isServer))
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

