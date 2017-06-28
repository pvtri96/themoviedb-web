import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  movieListActions ,movieListFilter} from '../../redux/movies/movieList';
import {
  Row, Col,Dropdown,DropdownItem, DropdownToggle,DropdownMenu,


} from 'reactstrap';

import Movie from './Movie';
import {  movieListSelector } from '../../redux/movies/movieList';
import { getGenresMovie } from '../../services/movies';


class MoviesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }



  render() {
    return (
      <div >
        <Row style={{ marginBottom: '20px'}}>
          <Col>
            <Dropdown style={{float: 'right'}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Filter
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={()=> this.props.fetchMovies(movieListFilter.popular)} >Popular</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={()=> this.props.fetchMovies(movieListFilter.now_playing)} >Now playing</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={()=> this.props.fetchMovies(movieListFilter.top_rated)} >Top Rated</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={()=> this.props.fetchMovies(movieListFilter.upcoming)} >Upcoming</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row >
          {this.props.list.map(movie => (
            <Col md="6" xs="12" key={movie.id}>
              <Movie movie={movie} genres={getGenresMovie(movie.genre_ids, this.props.genres)} />
            </Col>
          ))
          }
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("movie List");
  console.log(state);
  return {
    list : movieListSelector(state).list,
    genres: movieListSelector(state).genres
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchMovies: (filter) => dispatch(movieListActions.fetchMovies(filter))
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(MoviesList);
