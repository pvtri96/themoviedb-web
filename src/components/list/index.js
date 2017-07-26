import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row, Col,


} from 'reactstrap';

import Movie from './Movie';
import {  movieListSelector } from '../../redux/movies/list';


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
    let list = this.props.list;
    if(!list )
    {
      return (<div></div>);
    }
    return (
      <div >
        <Row >
          {list.map(movie => (
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
  // console.log("movie List");
  // console.log(state);
  return {
    list : movieListSelector(state).list,
  };
};



export default connect(mapStateToProps,undefined)(Index);
