import React  from 'react';
import Services from '../../../service';


const limitLengthTextHomepage = 40;
const Index = props => {
  let homepage = props.homepage;

  if(!homepage)
    return (<div></div>);
  return (
    <div>
      <div className="title">Homepage </div>
      <div className="content">
        {homepage ?
          <a href={homepage} target="_blank">
            {Services.reducerLengthText(homepage, limitLengthTextHomepage)}
          </a> :
          "-"
        }
      </div>
    </div>
  );
};


export default Index;
