import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {  movieListActions } from '../../redux/movies/movieList';
import {
  Row, Col,


} from 'reactstrap';

import Movie from './Movie';
import {  movieListSelector } from '../../../redux/movies/movieList';
// import { getGenresMovie } from '../../services/movies';


class Index extends Component {

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
    let movieList = this.props.list;
    if(!movieList )
    {
      return (<div></div>);
    }
    return (
      <div >
        <Row >
          {movieList.map(movie => (
            <Col md="6" xs="12" key={movie.id}>
              <Movie movie={movie} />
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
  };
};



export default connect(mapStateToProps,undefined)(Index);
