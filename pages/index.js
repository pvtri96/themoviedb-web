import React from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../src/containers/Master';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ListPeopleShowing from '../src/components/People/ListPeopleShowing';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../src/redux';


const Index = props => {
  return (
    <Master>
      <div>
        <div>
            <ListPeopleShowing />
        </div>
      </div>
    </Master>
  );
};


export default withRedux(initStore)(Index);
