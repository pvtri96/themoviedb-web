import React , {Component }from 'react';
import Fontawesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { movieSelector } from '../../../redux/movies/detail';
import { tvshowSelector } from '../../../redux/tvshows/detail';
import { menuSelector } from '../../../redux/menu';
import Genres from './genres';
import Keywords from './keywords';
import Homepage from './homepage';
import Revenue from './movies/revenue';
import Budget from './movies/budget';
import Runtime from './runtime';
import ReleaseInfo from './movies/releaseInfo';
import OriginalLanguage from './originalLanguage';
import Type from './tvshows/type';
import Networks from './tvshows/networks';




class Index extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    let detail = this.props.detail;
    let releaseDates = this.props.releaseDates;
    let keywords = this.props.keywords;
    console.log("Grey column");
    console.log(detail);
    if(!detail)
      return (<div></div>);

    return (
      <div className="grey_column">
        <div className="d-flex ">
          <span className="icon_item">
            <Fontawesome
              name="facebook-square"
              size="2x"
            />
          </span>

          <span className="icon_item">
            <Fontawesome
              name="twitter-square"
              size="2x"
            />
          </span>

          <span className="icon_item">
            <Fontawesome
              name="camera-retro"
              size="2x"
            />
          </span>

        </div> {/* icon */}

        <div className="title">Facts</div>

        <div className="title">Status</div>
        <div className="content">{detail.status}</div>
        {/* Status */}

        <ReleaseInfo releaseDates={releaseDates} />
        {/* Release Information */}

        <Networks networks={detail.networks} />
        {/* Networks */}

        <Type type={detail.type} />
        {/* Type */}

        <OriginalLanguage
          original_language={detail.original_language}
          spoken_languages={detail.spoken_languages}
        />
        {/* Original Language */}

        <Runtime runtime={detail.runtime} />
        {/* Runtime */}


        <Budget budget={detail.budget} />
        {/* Budget */}

        <Revenue revenue={detail.revenue} />
        {/* Revenue */}

        <Homepage homepage={detail.homepage} />
        {/* Homepage */}

        <Genres genres={detail.genres} />
        {/* Genres */}

        <Keywords keywords={keywords} />
        {/* Keywords */}

        <div className="title">
          <br />
          <hr />
        </div>



      </div>
    );
  }

}

const mapStateToProps = state => {
  const menu = menuSelector(state).menuTitle;

  switch(menu) {
  case "tvshows":
    return {
      detail: tvshowSelector(state).detail,
      keywords: tvshowSelector(state).keywords
    };
  case "movies":
    return {
      detail: movieSelector(state).detail,
      releaseDates: movieSelector(state).releaseDates,
      keywords: movieSelector(state).keywords
    };
  default:
    return {
      detail: movieSelector(state).detail,
      releaseDates: movieSelector(state).releaseDates,
      keywords: movieSelector(state).keywords
    };
  }

};

export default connect(mapStateToProps, undefined)(Index);
