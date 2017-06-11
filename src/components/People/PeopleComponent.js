import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PeopleActionCreators} from '../../redux/People';

const ListPeople=({getPeople})=>{
  return (
    <ul>
      <button onClick={getPeople}>People</button>
    </ul>
  )
}
const mapStateToProps=(state)=>{
  console.log(state);
  return {
    listPeople: state.people
  };
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getPeople:()=> dispatch(PeopleActionCreators.peopleFetch())
  }
}
const peopleConnect= connect(mapStateToProps, mapDispatchToProps)(ListPeople);

export default peopleConnect
