import React from 'react';
import {Col, CardImg} from 'reactstrap';
import Link from 'next/link';
import stylesheet from './listPeopleShowing.scss';

const Person = (props) =>{
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
