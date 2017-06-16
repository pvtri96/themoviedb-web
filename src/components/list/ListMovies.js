import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import { moviesActions, moviesSelector } from '../../redux/movies';

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

const mapStateToProp = state => ({
  movies: moviesSelector(state).list
});

const dispatchStateToProps = (dispatch) => {
  return {
    fetchMovies: () => {
      dispatch(moviesActions.fetchMovies());
    }
  };
};

export default connect( mapStateToProp , dispatchStateToProps )( ListMovies );
