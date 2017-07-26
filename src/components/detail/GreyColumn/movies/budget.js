import React  from 'react';
import Services from '../../../../service';


const Index = props => {
  let budget = props.budget;

  if(!budget)
    return (<div></div>);
  return (
    <div>
      <div className="title">Budget </div>
      <div className="content">
        $ {Services.setTextMoney(budget) }
      </div>
    </div>
  );
};


export default Index;
