import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PersonActionCreators} from '../../redux/Person';
import PersonReducer from '../../redux/Person/reducer';
import {Row, Col, CardDeck, CardGroup, Card, CardImg, CardBlock,
   CardText, Button, Modal, ModalHeader, ModalBody,
  Nav, NavItem, NavLink} from 'reactstrap';
import PeopleServices from '../../../services/peopleServices';
import stylesheet from '../People/listPeopleShowing.scss';

class PersonComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount(){
    this.props.getPerson(this.props.id);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
 render(){
   let person= this.props.person
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
              <p>{PeopleServices.reduceText(person.biography)}
              <a onClick={this.toggle} className="md_readmore">Read more</a></p>
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


const mapStateToProps=(state)=>{
  console.log(state);
  return {
    person: state.person.person
  };
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getPerson:(id)=> dispatch(PersonActionCreators.personFetch(id))
  }
}
const personConnect = connect(mapStateToProps, mapDispatchToProps)(PersonComponent);

export default personConnect;
