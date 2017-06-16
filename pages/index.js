import React from 'react';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../src/redux';


const Index = () => {
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


export default withRedux(initStore)(Index);
