import React from 'react';
import Master from '../src/containers/Master';
import {getStore} from '../src/redux';
import withRedux from 'next-redux-wrapper';
import List from '../src/components/listViews/List';

const Index = () => {
  return (
    <Master>
      <List></List>
    </Master>
  );
};

Index.propTypes = {

};

export default withRedux(getStore)(Index);

