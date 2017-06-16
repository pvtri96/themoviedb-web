import React from 'react';
import Link from 'next/link';

const TVShows = (props) => {
  let tvshow = props.tvshow;
  let imageURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <Link href={`/tv-show/tvshow-details?id=${tvshow.id}`}>
        <b> { tvshow.original_name } </b>
      </Link>
      <div>{ tvshow.id }</div>
      <img src={ imageURL+tvshow.poster_path } alt={ tvshow.title }/>
    </div>
  )
};

export default TVShows;

