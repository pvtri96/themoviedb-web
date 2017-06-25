import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import FontAwesome from 'react-fontawesome';
import StringSolve from '../../../service/StringSolve';

let picture= "https://image.tmdb.org/t/p/w500/";
const Movie = (props) => {
  let movie=props.movie;
  let path= picture+movie.poster_path;
  return (
    <div className="index">
      <div className="image avatar">
        <img src={path} alt={movie.original_title} />
        <div className="overlay">
          <div className="text">Hello World</div>
        </div>
      </div>
      <div className="detail">
        <div>
          <Link href={`/discover/movie-detail?id=${movie.id}`} >
            <a className="title">
              <h5>{StringSolve.subTitle(25,movie.title)}</h5>
            </a>
          </Link>
        </div>
        <div className="second-row">
          <div className="release-date">
            <FontAwesome name='calendar' size='lg' className="calendar"/>
            {movie.release_date}
          </div>
          <div className="vote-average">
            {movie.vote_average}
            <FontAwesome name='star' size='lg' className="star"/>
          </div>
        </div>
        <div>
          {StringSolve.subString(25,movie.overview)}
        </div>
      </div>
    </div>
  );
};
Movie.propTypes = {
  movie: PropTypes.object
};
export default Movie;
