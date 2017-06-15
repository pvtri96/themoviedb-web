import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PeopleActionCreators} from '../../redux/People';
import { Row, Col, CardDeck, CardGroup, Card, CardImg, CardBlock, CardText} from 'reactstrap';
import Link from 'next/link';
import PersonDetailShowing from '../Person/PersonDetailShowing';
import stylesheet from './ListPeopleShowing.scss';

const Person =(props)=>{
  let person = props.person;
  return(
    <Col >
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="item">
        <Link href={`/person-detail?id=${person.id}`}>
        <a><CardImg top width="255px" height="254px" src={process.env.IMAGE + person.profile_path}
        alt="Can't show the image" /></a>
        </Link>
        <div className="meta">
          <Link href={`/person-detail?id=${person.id}`}>
            <a><b> {person.name}</b></a>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default Person;
