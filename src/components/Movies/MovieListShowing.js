import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MovieListActionCreators, MovieListActionTypes} from '../../redux/movies/movieList';
import {Card, CardImg,CardSubtitle,
  Row, Col,CardText,Dropdown, DropdownToggle,DropdownMenu,
DropdownItem,

   CardBlock} from 'reactstrap';

import MovieShowing from './MovieShowing';


class MoviesList extends Component {

  constructor(props) {
    super(props);
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
    this.props.onLoad(MovieListActionTypes.POPULAR);
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
                <DropdownItem onClick={()=> this.props.onLoad(MovieListActionTypes.POPULAR)} >Popular</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={()=> this.props.onLoad(MovieListActionTypes.NOW_PLAYING)} >Now playing</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={()=> this.props.onLoad(MovieListActionTypes.TOP_RATED)} >Top Rated</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={()=> this.props.onLoad(MovieListActionTypes.UPCOMING)} >Upcoming</DropdownItem>
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
    onLoad: (filter) => dispatch(MovieListActionCreators.moviesFetch(filter))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MoviesList);
