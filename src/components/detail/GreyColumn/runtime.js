import React  from 'react';
import Services from '../../../service';


const Index = props => {
  let runtime = props.runtime;

  if(!runtime)
    return (<div></div>);
  return (
    <div>
      <div className="title">Runtime</div>
      <div className="content">
        {Services.setMinutesToHours(runtime)}
      </div>
    </div>
  );
};


export default Index;
