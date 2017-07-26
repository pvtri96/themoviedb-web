import React from 'react';

// components
import Social from './Social';
import TopBilledCast from './TopBilledCast';
import Media from './Media';
import Recommendations from './Recommendations';
import Season from './Season';



const WhiteColumn = () => (
  <div className="white_column">

    <TopBilledCast />
    {/* TopBilledCast*/}

    <Season />
    {/* Season */}

    <Social />
    {/* Social */}

    <Media />
    {/* Media */}

    <Recommendations />
    {/* Recommendations */}

  </div>
);

export default WhiteColumn;
