
import React ,{ Component }from 'react';
import MovieDetail from '../../src/components/movies/detail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieActions } from '../../src/redux/movies/movie';
import { connect } from 'react-redux'  ;


//  static async getInitialProps({ store, query }) {
//     await store.dispatch(movieActions.fetchMovieDetail(query.id));
//   }
class Index extends Component {
  static async getInitialProps({ isServer, store, query }) {
    if( isServer ) {
      await store.dispatch(movieActions.fetchMovieDetail(query.id));
    }
  }

  componentDidMount() {
    this.props.fetchMovieDetail(this.props.url.query.id);
  }

  render(){

    return (
      <Master>
        <div>
          <MovieDetail />
        </div>
      </Master>
    );
  }
}

const mapStateToProps = (state) => {
  console.log( state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    fetchMovieDetail : (id) => dispatch(movieActions.fetchMovieDetail(id))
  };
};
// connect(mapStateToProps, mapDispatchToProps)(Index);
// export default withRedux(getStore)(Index);  // mapStateToProps , mapDispatchToProps

export default withRedux(getStore,undefined , mapDispatchToProps)(Index);

