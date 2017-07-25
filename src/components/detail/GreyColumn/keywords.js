import React  from 'react';

const Index = props => {
  let keywords = props.keywords;

  if(!keywords)
    return (<div></div>);
  return (
    <div>
      <div className="title">Keywords </div>
      <div className="content">
        {keywords.map(keyword => (
          <div className="keyword_item" key={keyword.id}>
            {keyword.name}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Index;
