import React from 'react';
import Master from '../src/containers/Master';
import {getStore} from '../src/redux';
import withRedux from 'next-redux-wrapper';

const Index = () => {
  return (
    <Master>
      <div>This is homepage</div>
    </Master>
  );
};

Index.propTypes = {

};

export default withRedux(getStore)(Index);

