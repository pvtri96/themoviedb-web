import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MovieListActionCreators } from '../../redux/Movies/MovieList';
import {Card, CardImg,CardSubtitle,
  Row, Col,CardText,

   CardBlock} from 'reactstrap';

import MovieShowing from './MovieShowing';


class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
  }

  onLoad() {
    this.props.onLoad();
  }

  render() {
    this.onLoad();

    return (
      <div >
          <Row >
            {this.props.movies.map(movie =>
              <Col md="6" key={movie.id}>
                <MovieShowing movie={movie} />
              </Col>
            )}
          </Row>
      </div>
    );
  }
}


const mapState = (state) => {
  console.log(state.movieList.movies);
  return {
    movies : state.movieList.movies
  }
}

const mapDispatch = (dispatch) => {
  return {
    onLoad : () => dispatch(MovieListActionCreators.moviesFetch())
  }
}


export default connect(mapState,mapDispatch)(MoviesList);
