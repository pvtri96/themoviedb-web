import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PeopleActionCreators} from '../../redux/People';

const Person =(props)=>{
  let person= props.person;
  return(
    <div>
      <div className="poster">
        <img src={process.env.IMAGE + person.profile_path} width="200px"/>
        <p>{person.name}</p>
      </div>
    </div>
  );
}

export default Person;
