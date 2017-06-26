
import React, { Component} from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { movieSelector } from '../../../../redux/movies/movie';
import moviesService from '../../../../services/movies';

const limitLengthTopBilledCast=5;

class TopBilledCast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let credits = this.props.credits;
    if( !credits )
      return (<div></div>);
    let topBilledCast = moviesService.getTopBilledCast(credits.cast, limitLengthTopBilledCast);

    return (
      <div>
        <h4>Top Billed Cast</h4>
        <div className="people">
          {topBilledCast.map(person => (
            <div key={person.id} className="person">
              <img width="138" height="175"  src={process.env.MOVIE_IMG_URL + 'w138_and_h175_bestv2' + person.profile_path} alt={person.name} title={person.name}/>
              <div className="character">
                <Link href="#">
                  <a>{person.name}</a>
                </Link>
                <br/>
                <div style={{fontSize: '0.9em'}}>
                  {person.character}
                </div>
              </div>
            </div>
          ))}
        </div> { /* people */}

        <Link href="#">
          <a className="link"><h5>Full Cast & Crew</h5></a>
        </Link>
        <br/>
        <hr/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    credits: movieSelector(state).credits

  };
};

export default connect(mapStateToProps, undefined)(TopBilledCast);
