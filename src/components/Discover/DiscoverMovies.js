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
      primary_release_year:"",
      sort_by: "popularity.desc",
      with_keywords: ''
    };
    this.yearSelectChange = this.yearSelectChange.bind(this);
    this.sortBySelectChange = this.sortBySelectChange.bind(this);
    this.searchChange = this.searchChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  yearSelectChange(e){
    let value = e.target.value;
    this.setState({
      primary_release_year: value
    }, () => {
      this.props.fetchMovies(this.state.sort_by, this.state.primary_release_year,this.state.with_keywords);
    });
  }
  sortBySelectChange(e){
    let value= e.target.value;
    this.setState({
      sort_by: value
    }, () => {
      this.props.fetchMovies(this.state.sort_by, this.state.primary_release_year,this.state.with_keywords);
    });
  }
  searchChange(e){
    this.setState({
      with_keywords: e.target.value
    });
  }
  handleKeyPress (event){
    if(event.key == 'Enter'){
      console.log("key: "+this.state.with_keywords);
      this.props.fetchMovies(this.state.sort_by, this.state.primary_release_year,this.state.with_keywords);
    }
  }
  render(){
    let movies = this.props.movies;
    return (
      <div>
        <div>
          <div>
            <Input type="select" name="year-select" onChange={this.yearSelectChange}>
              <option value="">None</option>
              {StringSolve.getYear(1900).map(primary_release_year =>
                <option key={primary_release_year} value={primary_release_year} >{primary_release_year}</option>
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
          <div>
            <Input placeholder="search" value={this.state.with_keywords}
              onChange={this.searchChange} onKeyPress = {this.handleKeyPress}/>
          </div>
        </div>
        <div>
          <div>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <div className="list">
              {movies.length > 0 ? movies.map(movie =>
                <Movie movie={movie} key={movie.id} />
              ): "No result"}
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
    fetchMovies: (sort_by,primary_release_year,with_keywords) => {
      dispatch(moviesActions.fetchMovies(sort_by,primary_release_year,with_keywords));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (DiscoverMovies);
