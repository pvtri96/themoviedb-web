import React  from 'react';
import Services from '../../../../service';

const Index = props => {
  let revenue = props.revenue;

  if(!revenue)
    return (<div></div>);
  return (
    <div>
      <div className="title">Revenue </div>
      <div className="content">
        {revenue ?
          `$ ${Services.setTextMoney(revenue)}`  :
          "-"
        }
      </div>
    </div>
  );
};


export default Index;
