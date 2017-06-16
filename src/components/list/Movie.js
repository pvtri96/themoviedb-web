import React from 'react';
import Link from 'next/link';

const Movie = (props) => {
  let movie = props.movie;
  let imageURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <Link href={`/tv-show/movie-details?id=${movie.id}`}>
        <b> { movie.title } </b>
      </Link>
      <div>{ movie.id }</div>
      <img src={ imageURL+movie.poster_path } alt={ movie.title }/>
    </div>
  )
};

export default Movie;

