import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MovieListActionCreators } from '../../redux/Movies/MovieList';
import {Card, CardImg,CardSubtitle,
  Row, Col,CardText,

   CardBlock} from 'reactstrap';

import MovieShowing from './MovieShowing';






const MoviesList = ({ movies, onClick}) => {
  return (
    <div >
        <button onClick={onClick}>
          Get Movies
        </button>

        <Row >
          {movies.map(movie =>
            <Col md="6" key={movie.id}>
              <MovieShowing movie={movie} />
            </Col>
          )}
        </Row>
    </div>
  );

}


const mapState = (state) => {
  console.log(state.movieList.movies);
  return {
    movies : state.movieList.movies
  }
}

const mapDispatch = (dispatch) => {
  return {
    onClick : () => dispatch(MovieListActionCreators.moviesFetch())
  }
}

export default connect(mapState,mapDispatch)(MoviesList);
