import React  from 'react';

const getOriginalLanguage = (code, arr) => {
  let result = "";
  arr.map(temp => {
    if(temp.iso_639_1 == code)
    {
      result = temp.name;
    }
  });
  return result;
};

const Index = props => {
  let original_language = props.original_language;
  let spoken_languages = props.spoken_languages;

  if(!original_language)
    return (<div></div>);
  if(!spoken_languages)
    return (
      <div>
        <div className="title">Original Language</div>
        <div className="content">
          English
        </div>
      </div>
    )
  return (
    <div>
      <div className="title">Original Language</div>
      <div className="content">
        {getOriginalLanguage(original_language, spoken_languages)}
      </div>
    </div>
  );
};


export default Index;
