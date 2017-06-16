import React from 'react';
import {connect} from 'react-redux';
import {moviesActions, moviesSelector} from '../../redux/discover/movie';
import Movie from './Movie';
import stylesheet from './DiscoverMovies.scss';

const DiscoverMovies = (props) =>{
  let movies = props.movies;
  return (
    <div>
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="list">
          {movies.map(movie =>
            <Movie movie={movie} key={movie.id} />
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    movies: moviesSelector(state).list
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchMovies: () => {
      dispatch(moviesActions.fetchMovies());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (DiscoverMovies);
