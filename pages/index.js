
import React from 'react';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
// import Master from '../src/containers/Master';


const Index = props => {
  return (
    <div>
      { process.env.APP_NAME }
    </div>
  );
};

export default Index;
