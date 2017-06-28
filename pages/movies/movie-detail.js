
import React ,{ Component }from 'react';
import MovieDetail from '../../src/components/movies/detail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieActions } from '../../src/redux/movies/movie';
import PropTypes from 'prop-types';

let isReload = true;
class Index extends Component {

  static async getInitialProps({ isServer, store, query }) {
    // isReload = true;
    if(!isServer)
    {
      await store.dispatch(movieActions.fetchMovieDetail(query.id));
      isReload = false;
    }

  }


  componentDidMount() {
    console.log(isReload);

    if(isReload)
    {
      this.props.fetchMovieDetail(this.props.url.query.id);
    }
  }

  render(){
    return (
      <Master>
        <div>
          <MovieDetail  />
        </div>
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

