import React  from 'react';


const Index = props => {
  let type = props.type;

  if(!type)
    return (<div></div>);
  return (
    <div>
      <div className="title">Type</div>
      <div className="content">
        {type}
      </div>
    </div>
  );
};


export default Index;
