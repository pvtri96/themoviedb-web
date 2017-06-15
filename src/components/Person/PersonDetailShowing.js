import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PersonActionCreators} from '../../redux/Person';
import PersonReducer from '../../redux/Person/reducer';
import {Row, Col, CardDeck, CardGroup, Card, CardImg, CardBlock, CardText} from 'reactstrap';

class PersonComponent extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getPerson(this.props.id);
  }

 render(){
   let person= this.props.person
  return (
    <div>
        <Row>
          <Col xs="3">
            <CardImg top width="240px" height="255px" src={process.env.IMAGE + person.profile_path}
        alt="Can't show the image" />
            <h4>Pesonal Inf </h4>
            <strong>Gender</strong><br/>
            {
              (person.gender ==2)?"FeMale":"Male"
            }
            <br/>
            <strong>Birthday</strong>
            <br /><p>{person.birthday}</p>
          </Col>
          <Col xs="9">
            <p>{person.biography}</p>
          </Col>
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
