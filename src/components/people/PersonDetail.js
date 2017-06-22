import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Row, Col, Button,ButtonGroup, Modal, ModalHeader, ModalBody,CardImg,
  Nav, NavItem, NavLink} from 'reactstrap';
import Link from 'next/link';
import PeopleServices from '../../../services/PeopleServices';
import stylesheet from '../people/People.scss';
import { personSelector } from '../../redux/person';
import FontAwesome from 'react-fontawesome';

class PersonDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  // componentDidMount(){
  //   console.log(this.props.id);
  //   this.props.fetchPerson(this.props.id);
  // }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  escapeNewLineChars(valueToEscape) {
    if (valueToEscape != null && valueToEscape != "") {
      return valueToEscape.replace(/\n/g, '<br />');
    } else {
      return valueToEscape;
    }
  }

  render(){
    //console.log(this.props.person);
    //console.log(this.props.know_for);
    console.log(this.props.externalIds);
    let person = this.props.person;
    let know_for= this.props.know_for;
    let externalIds = this.props.externalIds;

    let biography = String(person.biography);
    let reduceBiography = PeopleServices.reduceWord(biography, 109);

    //condition reder homepage:
    let homepage;
    if(person.homepage != null){
      homepage =(<div>
        <strong>Official Site</strong><br/>
        <Link href={person.homepage}>
          <a> {person.homepage != null || person.homepage != " "}</a>
        </Link><br /><br />
      </div>);
    }
    //condition render facebook, twitter, instagram link
    let facebook , twitter, instagram;
    if(externalIds.facebook_id){
      facebook = (
        <span>
          <a href={'https://www.facebook.com/' + externalIds.facebook_id} target = "_blank">
            <FontAwesome name='facebook-square' /></a>{'  '}
        </span>
      );
    }
    if(externalIds.twitter_id){
      twitter = (
        <span>
          <a href={'https://twitter.com/'+ externalIds.twitter_id} target = "_blank">
            <FontAwesome name='twitter-square' /></a>{'  '}
        </span>
      );
    }
    if(externalIds.instagram_id){
      instagram = (
        <span>
          <a href = {'https://instagram.com/' + externalIds.instagram_id} target = "_blank">
            <FontAwesome name='camera-retro' /></a>{'  '}
        </span>
      );
    }
    //render read more
    let read_more;
    if(PeopleServices.reduceText(biography).length > 305) {
      read_more = (
        <span>
          <a href="#" onClick={this.toggle} className="read_more">Read more </a>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal_biogr" >
            <ModalHeader className="md_header"toggle={this.toggle}>Biograpphy</ModalHeader>
            <ModalBody >
              {biography.split('\n').map((item, index)=>{
                return <span key={index}>{item}<br/> </span>;
              })}
            </ModalBody>
          </Modal>
        </span>
      );
    }
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Row >
          <Row>
            <Col className="bg-image" xs="3" sm="4">
              <CardImg top className="per_img" src={process.env.IMAGE + person.profile_path}
                alt="Can't show the image" />
            </Col>
            <Col xs="8" className="text_biogrh">
              <h3>{person.name} {' '}
                {facebook}
                {twitter}
                {instagram}
              </h3>
              <strong>Biorgaphy</strong>
              <p>
                {reduceBiography.split('\n').map((item, index)=>{
                  return <span key={index}>{item}<br/> </span>;
                })}</p>
              {read_more}
            </Col>
          </Row>
        </Row>
        <Row className="per_inf">
          <Col xs="3" className ="inf">
            <br />
            <h4>Pesonal Inf </h4>
            <strong>Gender</strong><br/>
            {(person.gender ==2)?"FeMale":"Male"}
            <br/>
            <strong>Birthday </strong>
            <p>{person.birthday}</p>
            <strong>Place of birth</strong>
            <p>{person.place_of_birth}</p>
            {homepage}
            <strong>Also Known As</strong>
            <p>{person.also_known_as}</p>
            <br />
            <Button color="success">Login to edit</Button>
          </Col>
          <Col className="content">
            <Row>
              <Col >
                <Nav className="sub_nav" tabs>
                  <NavItem className="select_tag">
                    <NavLink href="#"><h5>Discusions</h5></NavLink>
                  </NavItem>{'  '}
                  <NavItem className="select_tag">
                    <NavLink href="#"><h5>Images</h5></NavLink>
                  </NavItem>{'  '}
                  <NavItem className="select_tag">
                    <NavLink href="#"><h5>Changes</h5></NavLink>
                  </NavItem>{'  '}
                  <NavItem className="select_tag">
                    <NavLink href="#"><h5>Reports</h5></NavLink>
                  </NavItem>{'  '}
                  <NavItem className="select_tag">
                    <NavLink href="#"><h5>Share</h5></NavLink>
                  </NavItem>{'  '}
                </Nav>
              </Col>
            </Row>
            <h4>Know for</h4>
            <Row>
              {know_for.cast.map(cast=>
                <Col key={cast.id}>
                  <CardImg top className="know_for_img" src={process.env.IMAGE + cast.poster_path}
                    alt="Can't show the image" />
                  <p >{cast.original_title}</p>
                </Col>
              )}
            </Row>
            <h4 className="act">Acting</h4>
            <ButtonGroup className="btn_group">
              <Button className="btn">Movies</Button>
              <Button className="btn">TV Shows</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
PersonDetail.propTypes = {
  fetchPerson: PropTypes.func,
  person: PropTypes.object,
  know_for: PropTypes.object,
  externalIds:PropTypes.object
};
const mapStateToProps=(state)=>{
  console.log(state);
  return {
    person: personSelector(state).person,
    know_for: personSelector(state).know_for,
    externalIds: personSelector(state).externalIds
  };
};
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     fetchPerson:(id)=> dispatch(personActions.fetchPerson(id))
//   };
// };
const personConnect = connect(mapStateToProps, undefined)(PersonDetail);

export default personConnect;

