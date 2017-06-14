import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MovieListActionCreators } from '../../redux/movies/movieList';
import {Card, CardImg,CardSubtitle,
  Row, Col,CardText,

   CardBlock} from 'reactstrap';

import MovieShowing from './movieShowing';


class MoviesList extends Component {

  constructor(props) {
    super(props);
    // this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount(){
    this.props.onLoad();
  }

  render() {
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


const mapStateToProps = (state) => {
  console.log(state);
  return {
    movies : state.movieList.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad : () => dispatch(MovieListActionCreators.moviesFetch())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MoviesList);
