import React from 'react';
import {Col, CardImg, CardBlock, Card} from 'reactstrap';
import Link from 'next/link';
import stylesheet from './People.scss';
import PeopleServices from '../../../services/PeopleServices';

const Person = (props) =>{
  let person = props.person;
  let subText = String(person.known_for[0].title) + ' '
                + String(person.known_for[1].title) + ' '
                + String(person.known_for[2].title);
  return(
    <Col >
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Card className="card">
        <div className="item" title={person.name}>
          <Link href={`/person-detail?id=${person.id}`}>
            <a><CardImg top className="image" height="300px" src={process.env.IMAGE + person.profile_path}
              alt="Can't show the image" /></a>
          </Link>
          <CardBlock className="meta">
            <Link href={`/person-detail?id=${person.id}`}>
              <a><b>{person.name}</b>
                <p>{PeopleServices.reduceWord(subText, 3)}</p>
              </a>
            </Link>
          </CardBlock>
        </div>
      </Card>
    </Col>
  );
};

export default Person;
// <a>{person.known_for.map(item =>
//               <p key={item.id}>{item.title}</p>
//             )}</a>
// <p>{person.known_for[0].title}</p>




