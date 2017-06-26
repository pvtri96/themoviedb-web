import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row, Col, Button, ButtonGroup, CardImg, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import stylesheet from '../../people/People.scss';
import { personSelector } from '../../../redux/person';
import Movies from '../PersonDetailComponent/Movies';

class PersonContent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    //console.log(this.props.know_for);
    let know_for = this.props.know_for;

    //size of movies
    let size = 8;
    return (
      <Col className = "content">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        <Row>
          <Col >
            <Nav className = "sub_nav" tabs>
              <NavItem className = "select_tag">
                <NavLink href = "#"><h5>Discusions</h5></NavLink>
              </NavItem>{'  '}
              <NavItem className = "select_tag">
                <NavLink href="#"><h5>Images</h5></NavLink>
              </NavItem>{'  '}
              <NavItem className="select_tag">
                <NavLink href = "#"><h5>Changes</h5></NavLink>
              </NavItem>{'  '}
              <NavItem className = "select_tag">
                <NavLink href = "#"><h5>Reports</h5></NavLink>
              </NavItem>{'  '}
              <NavItem className="select_tag">
                <NavLink href = "#"><h5>Share</h5></NavLink>
              </NavItem>{'  '}
            </Nav>
          </Col>
        </Row>
        <h4>Know for</h4>
        <Row>
          { know_for.cast.slice(0,size).map(cast=>
            <Col key = {cast.id}>
              <CardImg top className = "know_for_img" src={process.env.IMAGE + cast.poster_path}
                alt = "Can't show the image" />
              <p >{cast.original_title}</p>
            </Col>
          )}
        </Row>
        <h4 className = "act">Acting</h4>
        <ButtonGroup className = "btn_group">
          <Button className = "btn">Movies</Button>
          <Button className = "btn">TV Shows</Button>
        </ButtonGroup>
        <br />
        <Movies />
      </Col>
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
