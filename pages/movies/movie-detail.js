
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
    isReload = true;
    if(!isServer) {
      let genres = store.getState().movies.genres;
      await store.dispatch(movieActions.fetchMovieDetail(query.id,genres));
      isReload = false;

    } // chua reload , luc moi vao thi de genres cua movie list
  }


  componentDidMount() {
    console.log(isReload);

    // khi F5 render lai thi isReload = true
    // get movide detail reload

    if(isReload)
    {
      this.props.fetchMovieDetailReload(this.props.url.query.id);
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
    fetchMovieDetailReload : (id) => dispatch(movieActions.fetchMovieDetailReload(id))
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

