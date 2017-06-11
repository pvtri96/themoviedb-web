import React from 'react';
import {connect} from 'react-redux';
import {MoviesActionCreators} from '../../redux/Discover';

const DiscoverMovies = ({getMovies}) => {
  return(
    <div>
      <div>
        <button onClick={getMovies}>
          Get Movies
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    movies: state.movies
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
