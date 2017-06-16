import React from 'react';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../src/containers/Master';
// import ListMovies from '../src/components/list/ListMovies';
import {initStore} from '../src/redux';
import withRedux from 'next-redux-wrapper';

const Index = props => {
  return (
    <Master>
      <div>
        <div>
          { process.env.APP_NAME }
        </div>
      </div>
    </Master>
  );
};

Index.propTypes = {

};

export default withRedux(initStore)(Index);
