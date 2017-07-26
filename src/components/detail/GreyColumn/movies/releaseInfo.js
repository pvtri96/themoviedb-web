import React  from 'react';

const getTypeReleaseDates = i => {
  switch(i) {
  case 1: return "Premiere";
  case 2: return "Theatrical (limited) ";
  case 3: return "Theatrical";
  case 4: return "Digital";
  case 5: return "Physical";
  case 6: return "TV";
  }
};

const Index = props => {
  let releaseDates = props.releaseDates;

  if(!releaseDates)
    return (<div></div>);
  return (
    <div>
      <div className="title">Release Information</div>
      <div className="content">
        {releaseDates.map((temp,index) => (
          <div key={index} className="d-flex">
            <img src={process.env.FLAT_IMAGE_US_URL} alt="US"/>
            <span>
              {new Date(temp.release_date).toDateString()},{' '}
              {temp.certification}, {getTypeReleaseDates(temp.type)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Index;
