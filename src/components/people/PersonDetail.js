import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Row, Col, Button, Modal, ModalHeader, ModalBody,CardImg,
  Nav, NavItem, NavLink} from 'reactstrap';
import PeopleServices from '../../../services/peopleServices';
import stylesheet from '../people/People.scss';
import { personActions,personSelector } from '../../redux/person';

class PersonDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount(){
    console.log(this.props.id);
    this.props.fetchPerson(this.props.id);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  // <p>{PeopleServices.reduceText(person.biography)}
  // <a onClick={this.toggle} className="md_readmore">Read more</a></p>
  render(){
    console.log(this.props.person);
    let person= this.props.person;
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Row>
          <Row>
            <div className="bg-image">
              <CardImg top width="240px" height="255px" src={process.env.IMAGE + person.profile_path}
                alt="Can't show the image" />
            </div>
            <Col xs="8">
              <h3>{person.name}</h3>
              <p>{person.biography}</p>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal_biogr" >
                <ModalHeader toggle={this.toggle}>Biograpphy</ModalHeader>
                <ModalBody >
                  {person.biography}
                </ModalBody>
              </Modal>
              <Nav className="sub_nav">
                <NavItem>
                  <NavLink href="#"><h5>Discusions</h5></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><h5>Images</h5></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><h5>Changes</h5></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><h5>Reports</h5></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><h5>Share</h5></NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>

          <Row>
            <Col xs="8">
              <h4>Pesonal Inf </h4>
              <strong>Gender</strong><br/>
              {
                (person.gender ==2)?"FeMale":"Male"
              }
              <br/>
              <strong>Known Credits</strong>
              <strong>Birthday </strong>
              <p>{person.birthday}</p>
              <strong>Place of birth</strong>
              <p>{person.place_of_birth}</p>
              <strong>Official Site</strong>
              <p>{person.homepage}</p>
              <strong>Also Known As</strong>
              <p>{person.also_known_as}</p>
              <br />
              <Button color="success">Login to edit</Button>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}
PersonDetail.propTypes = {
  fetchPerson: PropTypes.func,
  person: PropTypes.object
};
const mapStateToProps=(state)=>{
  console.log(state);
  return {
    person: personSelector(state).person
  };
};
const mapDispatchToProps=(dispatch)=>{
  return {
    fetchPerson:(id)=> dispatch(personActions.fetchPerson(id))
  };
};
const personConnect = connect(mapStateToProps, mapDispatchToProps)(PersonDetail);

export default personConnect;

