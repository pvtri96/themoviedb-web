import React,{ Component } from 'react';

const Movie = (props) => {
  let movie = props.movie;
  let imageURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <div>{ movie.title }</div>
      <img src={imageURL+movie.poster_path} alt=""/>
    </div>
  )
};

export default Movie;
