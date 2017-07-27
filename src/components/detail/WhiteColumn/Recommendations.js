
import React, {Component} from 'react';
import { connect} from 'react-redux';
import { movieSelector } from '../../../redux/movies/detail';
import FontAwesome      from 'react-fontawesome';
import Router from 'next/router';
import moviesService from '../../../service';
import { tvshowSelector } from '../../../redux/tvshows/detail';
import { menuSelector } from '../../../redux/menu';

const lengthTitle = 4;
const lengthLimitRecommendations = 5;

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.getChanges = this.getChanges.bind(this);
  }

  getChanges(detail) {
    let result = {};
    switch(this.props.menu){
    case "movies":
    {
      result.title = detail.title;
      result.release_date = detail.release_date;
      result.link = "movies";
      break;
    }
    case "tvshows":
    {
      result.title = detail.name;
      result.release_date = detail.first_air_date;
      result.link = "tv-show";
      break;
    }
    }
    return result;

  }
  render(){
    let recommendations = this.props.recommendations;
    if(!recommendations)
      return(<div></div>);
    let recommendationsLimit = recommendations.slice(0,lengthLimitRecommendations);
    return (
      <div >
        <h4>Recommendations</h4>

        <div className="recommendations">
          {recommendationsLimit.map(item => {
            let changes = this.getChanges(item);
            return ((
              <div className="recommendations_item"  key={item.id}>
                <img width="250" height="141" onClick={() => {
                  // Since that's a new page, it'll unload the current page,
                  // load the new one and call getInitialProps
                  // even though we asked to do shallow routing.

                  Router.push(`/`+ changes.link + `/detail?id=${item.id}`,
                    `/`+ changes.link + `/detail?id=${item.id}`,
                    { shallow: true });
                  // window.location.reload();
                  window.location.href=window.location.href;

                }} src={item.backdrop_path ? process.env.MOVIE_IMG_URL + 'w250_and_h141_bestv2' +
                item.backdrop_path : "../../../../static/image/no-image.jpg"} alt={changes.title} placeholder={changes.title} />

                <div className="meta" >
                  <div className="d-flex">
                    <div className="mr-auto p-2">
                      <FontAwesome
                        name="calendar"
                      /> {' '}
                      {moviesService.changeTextDate(changes.release_date)}
                    </div>

                    <div className="p-2" >
                      <FontAwesome
                        name="heart"
                      />
                    </div>

                    <div className="p-2">
                      <FontAwesome
                        name="bookmark"
                      />
                    </div>
                  </div>
                </div>

                <div className="title">

                  <span onClick={() => {
                    // Since that's a new page, it'll unload the current page,
                    // load the new one and call getInitialProps
                    // even though we asked to do shallow routing.

                    Router.push(`/`+ changes.link + `/detail?id=${item.id}`,
                      `/`+ changes.link + `/detail?id=${item.id}`,
                      { shallow: true });
                    // window.location.reload();
                    window.location.href=window.location.href;

                  }} className="link_title">
                    {moviesService.reduceWordsText(changes.title,lengthTitle)}
                  </span>

                  <span style={{float:'right'}}>
                    {item.vote_average.toFixed(1)} 	{' '}
                    <FontAwesome
                      name="star"
                    />
                  </span>
                </div>
              </div>
            ))
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const menu = menuSelector(state).menuTitle;

  switch(menu) {
  case "tvshows":
    return {
      menu : menuSelector(state).menuTitle,
      recommendations: tvshowSelector(state).recommendations
    };
  case "movies":
    return {
      menu : menuSelector(state).menuTitle,
      recommendations: movieSelector(state).recommendations
    };
  default:
    return {
      menu : menuSelector(state).menuTitle,
      recommendations: movieSelector(state).recommendations
    };
  }
};

export default connect(mapStateToProps, undefined)(Recommendations);
