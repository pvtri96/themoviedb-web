import React from 'react';
import PropTypes from 'prop-types';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'
import Master from '../src/containers/Master';


const Index = props => {
  return (
    <Master>
      <div>
        <div>
            Hello NextJS
        </div>
      </div>
    </Master>
  );
};

Index.propTypes = {

};

export default Index;
