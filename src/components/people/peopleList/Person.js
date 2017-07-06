import React from 'react';
import {Col, CardImg, CardBlock, Card} from 'reactstrap';
import Link from 'next/link';
import stylesheet from '../People.scss';
import PeopleServices from '../../../services/people/PeopleServices';

const Person = (props) =>{
  let person = props.person;

  //render more title
  // let subText = String(person.known_for[0].title + ' '
  //               + person.known_for[1].title + ' '
  //               + person.known_for[2].title);
  // <p>{PeopleServices.reduceWord(subText, 3)}</p>

  return(
    <Col>
      <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
      <Card className = "card">
        <div className = "item" title = {person.name}>
          <Link href={`person-detail?id=${person.id}`}>
            <a><CardImg top className = "image" height = "330px"
              src = {process.env.IMAGE + person.profile_path} alt = "Can't show the image"/></a>
          </Link>
          <CardBlock className = "meta">
            <Link href = {`/person-detail?id=${person.id}`}>
              <a><b>{person.name}</b>
                <p>{PeopleServices.reduceWord(person.known_for[0].title, 3)}</p>
              </a>
            </Link>
          </CardBlock>
        </div>
      </Card>
    </Col>
  );
};

export default Person;





