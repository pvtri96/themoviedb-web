import Master from '../../src/containers/Master';
import Details from '../../src/components/tvshow-details/Details';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import React from 'react';

const TVShowDetails = (props) => (
  <Master>
    <div>
      <Details id={ props.url.query.id } />
    </div>
  </Master>
)

export default withRedux(getStore)(TVShowDetails);

