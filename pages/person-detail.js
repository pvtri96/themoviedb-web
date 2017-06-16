import React from 'react';
import Master from '../src/containers/Master';
import PersonDetailShowing from '../src/components/Person/personDetailShowing';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../src/redux';

const PersonDetail = props => {
  return (
    <Master>
      <div>
        <div>
            <PersonDetailShowing id={props.url.query.id} />
        </div>
      </div>
    </Master>
  );
};

export default withRedux(initStore)(PersonDetail);
