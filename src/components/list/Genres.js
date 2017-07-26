import React from 'react';
import moviesService from '../../service';
import { movieListSelector } from '../../redux/movies/list';
import { connect } from 'react-redux';
import  { menuSelector } from '../../redux/menu';
import { tvshowsSelector } from '../../redux/tvshows/list';


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
  const menu = menuSelector(state).menuTitle;
  switch(menu) {
  case "movies":
    return {
      genres: movieListSelector(state).genres
    };
  case "tvshow":
    return {
      genres: tvshowsSelector(state).genres
    };
  default: return {genres: movieListSelector(state).genres}
  }
};

export default connect(mapStateToProps, undefined)(Index);
