import React from 'react';
import {Row, Col} from 'reactstrap';
import { connect} from 'react-redux';
import { movieSelector } from '../../../redux/movies/detail';
import moviesService from '../../../service';
import { menuSelector } from '../../../redux/menu';

const limitLengthCrew = 6;

const Index = props => {

  switch(props.menu) {
  case "movies": {
    let credits = props.credits;
    if(!credits)
      return (<div></div>);
    let crewMovie = moviesService.getCrewMovie(credits.crew, props.jobs, limitLengthCrew);

    return (
      <div>
        <h4>Featured Crew</h4>
        <Row >
          {crewMovie.map(item=> (

            <Col className="crew" md="4" key={item.credit_id}>
              <h5>
                {item.name}
              </h5>
              <div>
                {item.job}
              </div>

            </Col>
          ))}
        </Row>
      </div>
    );
  }

  case "tvshows" : {
    let crewMovie = props.crew;
    let job = props.jobs;
    return (
      <div>
        <h4>Featured Crew</h4>
        <Row >
          {crewMovie.map(item=> (

            <Col className="crew" md="4" key={item.id}>
              <h5>
                {item.name}
              </h5>
              <div>
                {job}
              </div>

            </Col>
          ))}
        </Row>
      </div>
    );
  }

  default:
    return (<div></div>);
  }


};

const mapStateToProps = state => {
  return {
    credits: movieSelector(state).credits,
    menu : menuSelector(state).menuTitle
  };
};

export default connect(mapStateToProps, undefined)(Index);
