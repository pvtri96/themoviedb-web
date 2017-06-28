import FontAwesome from 'react-fontawesome';
import React from 'react';

const Spinner = () => (
  <div>
    <div style={{ position: 'absolute', top: '50%', left: '50%'}}>
      <FontAwesome
        name="spinner"
        spin
        size="4x"
      />
    </div>
  </div>
);

export default Spinner;
