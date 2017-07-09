import React from 'react';
import { connect } from 'react-redux';
import Service from '../../service';
import { dataSelector } from '../../redux/tvshows';

const Index = props => {
  if(!props.genres)
    return (<div></div>);

  let genres = Service.getGenres(props.genre_ids, props.genres);
  return (
    <div className="d-flex">
      <i className="genres" >{Service.subTitleString(genres, 25)}</i>
    </div>
  );
};

const mapStateToProps = state => {
  return  {
    genres: dataSelector(state).genres
  };
};

export default connect(mapStateToProps, undefined)(Index);
