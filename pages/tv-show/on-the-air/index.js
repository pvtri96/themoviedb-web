import React from 'react';
// import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../../../src/containers/Master';
// import ListTVShows from '../../src/components/list/ListTVShows';
import {getStore} from '../../../src/redux';
import withRedux from 'next-redux-wrapper';
import List from '../../../src/components/listViews/List';
import {tvshowsActionsTypes} from '../../../src/redux/tvshows/list';
const Index = () => {
  return (
    <Master>
      <List subMenu = {tvshowsActionsTypes.ON_THE_AIR} ></List>
    </Master>
  );
};

Index.propTypes = {

};

export default withRedux(getStore)(Index);
