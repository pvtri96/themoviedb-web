import React from 'react';
import {Row, Col} from 'reactstrap';
import { connect} from 'react-redux';
import { movieSelector } from '../../../../redux/movies/movie';
import moviesService from '../../../../services/movies';

const limitLengthCrew = 6;

const Index = props => {
  let crew = props.crew;
  if(! crew)
    return (<div></div>);
  let crewMovie = moviesService.getCrewMovie(crew, limitLengthCrew);
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
};

const mapStateToProps = state => {
  return {
    crew: movieSelector(state).crew
  };
};

export default connect(mapStateToProps, undefined)(Index);
