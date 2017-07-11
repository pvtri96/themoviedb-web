import React from 'react';

// components
import Social from './Social';
import TopBilledCast from './TopBilledCast';
import Media from './Media';
import Recommendations from './Recommendations';




const WhiteColumn = () => (
  <div className="white_column">

    <TopBilledCast />
    {/* TopBilledCast*/}

    <Social />
    {/* Social */}

    <Media />
    {/* Media */}

    <Recommendations />
    {/* Recommendations */}

  </div>
);

export default WhiteColumn;
