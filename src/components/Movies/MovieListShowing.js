import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  movieListActionCreators,movieListFilter} from '../../redux/movies/movieList';
import {
  Row, Col,Dropdown,DropdownItem, DropdownToggle,DropdownMenu,


} from 'reactstrap';

import MovieShowing from './MovieShowing';


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

  componentDidMount(){
    this.props.onLoad(movieListFilter.popular);
  }
  // <Row style={{ marginBottom: '20px'}}>
  //         <Col>
  //           <Dropdown style={{float: 'right'}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  //             <DropdownToggle caret>
  //               Filter
  //             </DropdownToggle>
  //             <DropdownMenu right>
  //               <DropdownItem onClick={()=> this.props.onLoad(movieListFilter.popular)} >Popular</DropdownItem>
  //               <DropdownItem divider />
  //               <DropdownItem onClick={()=> this.props.onLoad(movieListFilter.now_playing)} >Now playing</DropdownItem>
  //               <DropdownItem divider />
  //               <DropdownItem onClick={()=> this.props.onLoad(movieListFilter.top_rated)} >Top Rated</DropdownItem>
  //               <DropdownItem divider />
  //               <DropdownItem onClick={()=> this.props.onLoad(movieListFilter.upcoming)} >Upcoming</DropdownItem>
  //             </DropdownMenu>
  //           </Dropdown>
  //         </Col>
  //       </Row>
// <Row >
//           {this.props.movieList.map(movie =>
//             <Col md="6" key={movie.id}>
//               <MovieShowing movie={movie} />
//             </Col>
//           )}
//         </Row>
  render() {
    return (
      <div >


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
    onLoad: (filter) => dispatch(movieListActionCreators.moviesFetchRequested(filter))
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(MoviesList);
