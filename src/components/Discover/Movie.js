import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import FontAwesome from 'react-fontawesome';

let picture= "https://image.tmdb.org/t/p/w500/";
const Movie = (props) => {
  let movie=props.movie;
  let path= picture+movie.poster_path;
  return (
    <div className="index">
      <img className="image" src={path} alt={movie.original_title} />
      <div className="detail">
        <div>
          <Link href={`/movieDetail?id=${movie.id}`} >
            <a className="title">
              <h5>{movie.title}</h5>
            </a>
          </Link>
        </div>
        <div className="second-row">
          <div className="release-date">
            <FontAwesome name='calendar' size='1x' className="calendar"/>
            {movie.release_date}
          </div>
          <div className="vote-average">
            {movie.vote_average}
            <FontAwesome name='star' size='1x' className="star"/>
          </div>
        </div>
        <div>
          <p>
            We don't have an overview translated in English. Help us expand our database by adding one.
          </p>
        </div>
      </div>
    </div>
  );
};
Movie.propTypes = {
  movie: PropTypes.object
};
export default Movie;
