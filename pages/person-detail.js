import React from 'react';
import Master from '../src/containers/Master';
import PersonDetail from '../src/components/people/PersonDetail';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../src/redux';

const Detail = props => {
  return (
    <Master>
      <div>
        <div>
          <PersonDetail id={props.url.query.id} />
        </div>
      </div>
    </Master>
  );
};

export default withRedux(getStore)(Detail);
