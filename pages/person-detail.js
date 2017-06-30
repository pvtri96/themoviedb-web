import React, {Component}from 'react';
import Master from '../src/containers/Master';
import PersonDetail from '../src/components/people/PersonDetail';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../src/redux';
import { personActions } from '../src/redux/person';

class Detail extends Component{
  static async getInitialProps({store, query}) {
    await store.dispatch(personActions.fetchPerson(query.id));
  }
  render(){
    return (
      <Master>
        <PersonDetail />
      </Master>
    );
  }
}
export default withRedux(getStore)(Detail);
