import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MoviesActionCreators} from '../../redux/Discover';
import Movie from './Movie';
import stylesheet from './DiscoverMovies.scss';

const DiscoverMovies = ({movies,getMovies}) => {
    let discoverMovies = movies.map(movie =>
         <Movie movie={movie} key={movie.id} > </Movie>
    );
    return (
      <div>
        <div>
          <button onClick={getMovies}>
          Get Movies
          </button>
        </div>
        <div>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div className="list">
            {discoverMovies}
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    movies: state.movies.list
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    getMovies: () => {
      dispatch(MoviesActionCreators.moviesFetch());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (DiscoverMovies);
