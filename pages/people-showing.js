import React, { Component } from 'react';
import Master from '../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../src/redux';
import { peopleActions } from '../src/redux/people';
import People from '../src/components/people/People';

class ListPeople extends Component{
  static async getInitialProps({store}) {
    await store.dispatch(peopleActions.fetchPeople());
  }
  render(){
    return (
      <Master>
        <div>
          <People />
        </div>
      </Master>
    );
  }
}

export default withRedux(getStore)(ListPeople);