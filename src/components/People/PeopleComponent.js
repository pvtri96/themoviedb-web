import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PeopleActionCreators} from '../../redux/People';
import Person from './Person';


const ListPeople=({listPeople, getPeople})=>{
  console.log(listPeople);
  let list = listPeople.map((person)=>(
    <Person person={person} key={person.id}/>
  ));
  // console.log(list);
  return (
    <div>
      <button onClick={getPeople}>People</button>
      <h3>Popular people</h3>
      <div>
        {list}
      </div>
    </div>

  )
}
const mapStateToProps=(state)=>{
  // console.log(state);
  return {
    listPeople: state.people.listPeople
  };
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getPeople:()=> dispatch(PeopleActionCreators.peopleFetch())
  }
}
const peopleConnect= connect(mapStateToProps, mapDispatchToProps)(ListPeople);

export default peopleConnect;
