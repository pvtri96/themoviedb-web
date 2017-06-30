import React from 'react';
import {Row, Col} from 'reactstrap';
import { connect} from 'react-redux';
import { movieSelector } from '../../../../redux/movies/detail';
import moviesService from '../../../../services/movies';

const limitLengthCrew = 6;

const Index = props => {
  let credits = props.credits;
  if(! credits)
    return (<div></div>);
  let crewMovie = moviesService.getCrewMovie(credits.crew, limitLengthCrew);
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
    credits: movieSelector(state).credits
  };
};

export default connect(mapStateToProps, undefined)(Index);
