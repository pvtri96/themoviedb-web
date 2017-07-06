import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Col, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

import stylesheet from '../../People.scss';
import { personSelector } from '../../../../redux/people/person';

class PersonInf extends Component {
  constructor(props){
    super(props);
  }
  render(){
    //console.log(this.props.person);
    let person = this.props.person;

    //condition reder homepage:
    let homepage;
    if(person.homepage != null){
      homepage = (<div className = "official_site">
        <strong>Official Site</strong><br/>
        <Link href = {person.homepage} >
          <a > {person.homepage}</a>
        </Link><br/><br/>
      </div>);
    }
    return (
      <Col xs = "3" className = "inf">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} /><br />
        <h4>Pesonal Inf </h4><br />
        <strong>Gender</strong><br/>
        {(person.gender ==2)?"Male":"FeMale"}
        <br/><br />
        <strong>Birthday </strong>
        <p>{person.birthday}</p>
        <strong>Place of birth</strong>
        <p>{person.place_of_birth}</p>
        {homepage}
        <strong>Also Known As</strong>
        <p>
          {person.also_known_as.map((item, index)=>{
            return <span key = {index}>{item}<br/> </span>;
          })}
        </p>
        <br />
        <Button color = "success">Login to edit</Button>
      </Col>
    );
  }
}

PersonInf.propTypes = {
  fetchPerson: PropTypes.func,
  person: PropTypes.object,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    person: personSelector(state).person,
  };
};

const PersonInfConnect = connect(mapStateToProps, undefined)(PersonInf);

export default PersonInfConnect;
