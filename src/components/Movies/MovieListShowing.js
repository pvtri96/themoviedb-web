import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MovieListActionCreators, MovieListActionTypes} from '../../redux/movies/movieList';
import {Card, CardImg,CardSubtitle,
  Row, Col,CardText,Dropdown, DropdownToggle,DropdownMenu,
DropdownItem,

   CardBlock} from 'reactstrap';

import MovieShowing from './movieShowing';


class MoviesList extends Component {

  constructor(props) {
    super(props);
    // this.onLoad = this.onLoad.bind(this);
    this.state = {
      dropdownOpen: false,
    }

    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentDidMount(){
    this.props.onFilterPopular();
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
                <DropdownItem onClick={this.props.onFilterPopular} >Popular</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.props.onFilterNowPlaying} >Now playing</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.props.onFilterTopRated} >Top Rated</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.props.onFilterUpcoming} >Upcoming</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row >
          {this.props.movieList.map(movie =>
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
    movieList : state.movies.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    onFilterPopular: () => {
      dispatch(MovieListActionCreators.moviesFetch(MovieListActionTypes.POPULAR))
    },
    onFilterNowPlaying: () => {
      dispatch(MovieListActionCreators.moviesFetch(MovieListActionTypes.NOW_PLAYING))
    },
    onFilterTopRated: () => {
      dispatch(MovieListActionCreators.moviesFetch(MovieListActionTypes.TOP_RATED))
    },
    onFilterUpcoming: () => {
      dispatch(MovieListActionCreators.moviesFetch(MovieListActionTypes.UPCOMING))
    },
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MoviesList);
