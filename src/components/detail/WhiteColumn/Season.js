import React  from 'react';
import Services from '../../../service';
import { tvshowSelector } from '../../../redux/tvshows/detail';
import { connect } from 'react-redux';

const Index = props => {
  let season = props.season;
  if(!season)
    return (<div></div>);

  return (
    <div>
      <br/>
      <h4>Last Season</h4>
      <div className="season d-flex">
        <div>
          {season.poster_path ?
            <img width="130" height="195"  src={process.env.MOVIE_IMG_URL + 'w130_and_h195_bestv2' +
            season.poster_path} alt={season.name} title={season.name}/> :
            <img width="130" height="195" alt="no-image" src="../../../../static/image/no-image.jpg" />
          }
        </div>
        <div className="info-season">
          <a href="" className="link_title">Season {season.season_number}</a>
          <div style={{fontWeight:"600"}}>{new Date(season.air_date).getFullYear()} | {' '}
            {season.episodes.length} Episodes</div>
          <div>
            {season.overview}
          </div>
        </div>
      </div> { /* season */}

      <a className="link"><h5>View All Seasons</h5></a>
      <br/>
      <hr/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    season: tvshowSelector(state).season
  };
};

export default connect(mapStateToProps, undefined)(Index);
