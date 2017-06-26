
import React ,{ Component }from 'react';
import MovieDetail from '../../src/components/movies/detail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieActions } from '../../src/redux/movies/movie';


//  static async getInitialProps({ store, query }) {
//     await store.dispatch(movieActions.fetchMovieDetail(query.id));
//   }
class Index extends Component {
  static async getInitialProps({ store, query }) {
    await store.dispatch(movieActions.fetchMovieDetail(query.id));
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


export default withRedux(getStore)(Index);


