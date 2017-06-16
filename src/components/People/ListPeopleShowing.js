import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PeopleActionCreators} from '../../redux/People';
import Person from './person';
import {Row, Col, CardDeck, CardGroup, Card, CardImg, CardBlock, CardText} from 'reactstrap';
import stylesheet from './listPeopleShowing.scss';

class ListPeople extends Component{
  constructor(props){
    super(props);
    this.getPeople = this.getPeople.bind(this);
  }

  componentDidMount(){
    this.getPeople();
  }

  getPeople(){
    this.props.getPeople();
  }

 render(){
  return (
    <div>
      <h3>Popular people</h3>
      <Row>
      <CardDeck>
        {this.props.listPeople.map(person=>
          <Person person={person} key={person.id}/>
        )}
              <br />
      </CardDeck>
      </Row>
      <Row>
        <div className="pagonation">
          <p className="left">
            Currently on page:
          </p>
          <p className="right">
          </p>
        </div>
      </Row>
    </div>
  );
 }
}
const mapStateToProps=(state)=>{
  console.log(state);
  return {
    listPeople: state.people.listPeople
  };
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getPeople:()=> dispatch(PeopleActionCreators.peopleFetch())
  }
}
const peopleConnect = connect(mapStateToProps, mapDispatchToProps)(ListPeople);

export default peopleConnect;
