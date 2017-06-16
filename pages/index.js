
import React from 'react';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../src/containers/Master';
import Movies from './movies';


const Index = () => {
  return (
    <Master>
      <Movies />
    </Master>
  );
};

export default Index;
