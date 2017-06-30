import FontAwesome from 'react-fontawesome';
import React from 'react';
// <img src="../../static/image/ripple.svg" alt=""/>
const Index = () => (
  <div>
    <div style={{ position: 'absolute', top: '50%', left: '50%'}}>
      <FontAwesome
        name="spinner"
        size="4x"
        pulse
        fixedWidth
        style ={{color: '#2ecc71'}}
      />
    </div>
  </div>
);

export default Index;
