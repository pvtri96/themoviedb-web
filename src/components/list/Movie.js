import React,{ Component } from 'react';
import Link from 'next/link';

const Movie = (props) => {
  let movie = props.movie;
  let imageURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <div>{ movie.id }</div>
      <img src={ imageURL+movie.poster_path } alt={ movie.title }/>
    </div>
  )
};

export default Movie;
// <Link href={`/movie-details?id=${movie.id}`}>
//         <b> { movie.title } </b>
//       </Link>
