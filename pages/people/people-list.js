import React, { Component } from 'react';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { peopleActions } from '../../src/redux/people/peoplelist';
import People from '../../src/components/people/peopleList/People';

class ListPeople extends Component{
  static async getInitialProps({store}) {
    await store.dispatch(peopleActions.fetchPeople());
  }
  render(){
    return (
      <Master>
        <People />
      </Master>
    );
  }
}

export default withRedux(getStore)(ListPeople);
