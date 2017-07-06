import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row, Col, Button, ButtonGroup, CardImg } from 'reactstrap';
import PropTypes from 'prop-types';

import stylesheet from '../../People.scss';
import { personSelector } from '../../../../redux/people/person';
import Movies from '../PersonDetailComponent/Movies';
import TVShows from '../PersonDetailComponent/TVShows';
import PeopleServices from '../../../../services/people/PeopleServices';

class PersonContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      onClickShow: true
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({onClickShow: !this.state.onClickShow});
  }
  render(){
    //console.log(this.props.know_for);
    let know_for = this.props.know_for;

    //size of movies
    let size = 8;
    //sort cast array
    let know_sort_cast_des = PeopleServices.sortByKey(know_for.cast,"id");
    return (
      <div className = "content">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        <div className="sub_navbar_wrapper">
          <ul className="sub_navbar">
            <li className="sub_navbar_tab">Disscusion</li>
            <li className="sub_navbar_tab">Images</li>
            <li className="sub_navbar_tab">Changes</li>
            <li className="sub_navbar_tab">Report</li>
            <li className="sub_navbar_tab">Share</li>
          </ul>
        </div>
        <hr />
        <h4>Know for</h4>
        <Row className="per_movies">
          { know_sort_cast_des.slice(0,size).map(cast=>
            <Col key = {cast.id} className="per_movies_div" >
              <a href="#"><CardImg top className = "know_for_img" src={process.env.IMAGE + cast.poster_path}
                alt = {cast.title} /></a>
              <a className="know_for_title" href="#">{cast.original_title}</a>
            </Col>
          )}
        </Row>
        <h4 className = "act">Acting</h4>
        <ButtonGroup className = "btn_group">
          <Button onClick={this.onClick}  className = "btn">Movies</Button>
          <Button onClick={this.onClick} className = "btn">TV Shows</Button>
        </ButtonGroup>
        {this.state.onClickShow && <Movies />}
        {!this.state.onClickShow && <TVShows />}
      </div>
    );
  }
}

PersonContent.propTypes = {
  know_for: PropTypes.object,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    know_for: personSelector(state).know_for,
  };
};

const PersonContentConnect = connect(mapStateToProps, undefined)(PersonContent);

export default PersonContentConnect;
