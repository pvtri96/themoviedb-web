import React from 'react';
import moviesService from '../../../services/movies';
import { movieListSelector } from '../../../redux/movies/list';
import { connect } from 'react-redux';


const Index = props => {
  if(!props.genres)
    return (<div></div>);

  let genres = moviesService.getGenresMovie(props.genre_ids, props.genres);
  return (
    <span className="genres">
      <i>{moviesService.reducerLengthText(genres, 35)}</i>
    </span>
  );
};

const mapStateToProps = state => {
  return {
    genres: movieListSelector(state).genres
  };
};

export default connect(mapStateToProps, undefined)(Index);
