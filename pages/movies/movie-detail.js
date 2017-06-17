
import React ,{ Component }from 'react';
import MovieDetail from '../../src/components/movies/MovieDetail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieActions} from '../../src/redux/movies/movie';

const Index = (props) =>  (
  <Master>
    <div>
      <MovieDetail id={props.url.query.id} />
    </div>
  </Master>
);



export default withRedux(getStore)(Index);


