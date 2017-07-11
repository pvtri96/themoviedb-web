
import React, {Component} from 'react';
import { connect} from 'react-redux';
import { movieSelector } from '../../../redux/movies/detail';
import FontAwesome      from 'react-fontawesome';
import Router from 'next/router';
import moviesService from '../../../service';
import Link from 'next/link';

const lengthTitle = 4;
const lengthLimitRecommendations = 5;

class Recommendations extends Component {
  constructor(props) {
    super(props);

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
          {recommendationsLimit.map(item => (
            <div className="recommendations_item"  key={item.id}>
              <img  src={process.env.MOVIE_IMG_URL + 'w250_and_h141_bestv2' +
              item.backdrop_path} alt={item.title} placeholder={item.title} />

              <div className="meta" >
                <div className="d-flex">
                  <div className="mr-auto p-2">
                    <FontAwesome
                      name="calendar"
                    /> {' '}
                    {moviesService.changeTextDate(item.release_date)}
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

                  Router.push(`/movies/detail?id=${item.id}`,
                    `/movies/detail?id=${item.id}`,
                    { shallow: true });
                  // window.location.reload();
                  window.location.href=window.location.href;

                }} className="link_title">
                  {moviesService.reduceWordsText(item.title,lengthTitle)}
                </span>



                <span style={{float:'right'}}>
                  {item.vote_average.toFixed(1)} 	{' '}
                  <FontAwesome
                    name="star"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recommendations: movieSelector(state).recommendations

  };
};

export default connect(mapStateToProps, undefined)(Recommendations);
