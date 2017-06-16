import React from 'react';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../src/containers/Master';
// import ListMovies from '../src/components/list/ListMovies';
import {getStore} from '../src/redux';
import withRedux from 'next-redux-wrapper';
import TVShows from '../src/components/list/ListTVShows';

const Index = () => {
  return (
    <Master>
      <div>
        <div>
          <TVShows></TVShows>
        </div>
      </div>
    </Master>
  );
};

Index.propTypes = {

};

export default withRedux(getStore)(Index);
