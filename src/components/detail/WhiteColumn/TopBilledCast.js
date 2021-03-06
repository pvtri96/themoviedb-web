
import React, { Component} from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { movieSelector } from '../../../redux/movies/detail';
import moviesService from '../../../service';
import { tvshowSelector } from '../../../redux/tvshows/detail';
import { menuSelector } from '../../../redux/menu';

const limitLengthTopBilledCast=5;

class TopBilledCast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let credits = this.props.credits;
    console.log(credits);
    if( !credits )
      return (<div></div>);
    let topBilledCast = moviesService.getTopBilledCast(credits.cast, limitLengthTopBilledCast);

    return (
      <div>
        <h4>Top Billed Cast</h4>
        <div className="people">
          {topBilledCast.map(person => (
            <div key={person.id} className="person">
              {person.profile_path ?
                <img width="138" height="175"  src={process.env.MOVIE_IMG_URL + 'w138_and_h175_bestv2' +
                person.profile_path} alt={person.name} title={person.name}/> :
                <img width="138" height="175" alt="no-image"
                  src="../../../../static/image/no-image.jpg" />
              }

              <div className="character">
                <Link >
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

        <a className="link"><h5>Full Cast & Crew</h5></a>
        <br/>
        <hr/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const menu = menuSelector(state).menuTitle;

  switch(menu) {
  case "tvshows":
    return {
      credits: tvshowSelector(state).credits
    };
  case "movies":
    return {
      credits: movieSelector(state).credits
    };
  default:
    return {
      credits: movieSelector(state).credits
    };
  }

};

export default connect(mapStateToProps, undefined)(TopBilledCast);
