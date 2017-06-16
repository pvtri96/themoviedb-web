import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MoviesActionCreators} from '../../redux/discover/movie';
import Movie from './Movie';
import stylesheet from './DiscoverMovies.scss';

class DiscoverMovies extends Component{
  constructor (props){
      super(props);
      this.getMovies= this.getMovies.bind(this);
  }
  componentDidMount() {
    this.getMovies();
  }
  getMovies(){
    this.props.getMovies();
  }
  render(){
    return (
      <div>
        <div>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div className="list">
            {this.props.movies.map(movie =>
              <Movie movie={movie} key={movie.id} />
            )}
          </div>
        </div>
      </div>
    )
  }
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
