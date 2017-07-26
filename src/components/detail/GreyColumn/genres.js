import React  from 'react';

const Index = props => {
  let genres = props.genres;

  if(!genres)
    return (<div></div>);
  return (
    <div>
      <div className="title">Genres </div>
      <div className="content">
        {genres.map(genre => (
          <div className="genre_item" key={genre.id}>
            {genre.name}
          </div>
        ))}
      </div> {/* Genres */}
    </div>
  );
};


export default Index;
