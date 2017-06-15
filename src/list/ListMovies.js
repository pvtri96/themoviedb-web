import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import { MoviesActionCreators } from '../redux/movie';

class ListMovies extends Component {
  constructor(props){
    super(props);
    this.fetchMovies =  this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies () {
     this.props.fetchMovies();
  }

  render() {
    return (
      <div>
        {this.props.movies.map( movie => (
          <Movie movie = {movie} key = {movie.id} />
        ))}
      </div>
    )
  }
};

const mapStateToProp = (state) => {
  console.log(state);
  return {
    movies: state.movies.list
  }
}

const dispatchStateToProps = (dispatch) => {
  return {
    fetchMovies: () => {
      dispatch(MoviesActionCreators.moviesFetch());
    }
  }
}

export default connect( mapStateToProp , dispatchStateToProps )( ListMovies );
