import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moviesActions, moviesSelector} from '../../redux/discover/movie';
import Movie from './Movie';
import stylesheet from './DiscoverMovies.scss';
import {
  Input
} from 'reactstrap';
import StringSolve from '../../../service/StringSolve';

class DiscoverMovies extends Component{
  constructor(props){
    super(props);
    this.state = {
      year:"",
      sort_by: "popularity.desc",
      with_keywords: ''
    };
    this.yearSelectChange = this.yearSelectChange.bind(this);
    this.sortBySelectChange = this.sortBySelectChange.bind(this);
  }
  yearSelectChange(e){
    let value = e.target.value;
    this.setState({
      year: value
    }, () => {
      this.props.fetchMovies(this.state.sort_by, this.state.year);
    });
  }
  sortBySelectChange(e){
    let value= e.target.value;
    this.setState({
      sort_by: value
    }, () => {
      this.props.fetchMovies(this.state.sort_by, this.state.year);
    });
  }
  render(){
    let movies = this.props.movies;
    //console.log(this.state.year);
    //console.log(this.state.sort_by);
    return (
      <div>
        <div>
          <div>
            <Input type="select" name="year-select" onChange={this.yearSelectChange}>
              <option value="">None</option>
              {StringSolve.getYear(1900).map(year =>
                <option key={year} value={year} >{year}</option>
              )}
            </Input>
          </div>
          <div>
            <Input type="select" name="sort-by-select" onChange={this.sortBySelectChange}>
              <option value="popularity.desc">Popularity Descending</option>
              <option value="popularity.asc" >Popularity Ascending</option>
              <option value="release_date.desc" >Release Date Descending</option>
              <option value="release_date.asc" >Release Date Ascending</option>
            </Input>
          </div>

        </div>
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
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    movies: moviesSelector(state).list
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchMovies: (sort_by,year) => {
      dispatch(moviesActions.fetchMovies(sort_by,year));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (DiscoverMovies);
