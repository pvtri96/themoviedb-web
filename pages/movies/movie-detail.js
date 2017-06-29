
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
    // isReload = false;
    if(!isServer){
      isReload = false;
    }

    if(isServer)
    {
      await store.dispatch(movieActions.fetchMovieDetail(query.id, true));
      console.log("isServer ");

    }

  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log(isReload);
    setTimeout(() => this.setState({ isLoading: false }), 2000);
    if(!isReload)
    {
      console.log("Did mount");
      this.props.fetchMovieDetail(this.props.url.query.id, false);
    }
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

