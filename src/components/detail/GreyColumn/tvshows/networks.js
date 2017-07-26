import React  from 'react';
import Services from '../../../../service';

const Index = props => {
  let networks = props.networks;

  if(!networks)
    return (<div></div>);
  return (
    <div>
      <div className="title">Networks</div>
      <div className="content">
        {Services.getNetworkTvshows(networks)}
      </div>
    </div>
  );
};


export default Index;
