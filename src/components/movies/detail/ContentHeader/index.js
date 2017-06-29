import React, {Component} from 'react';
import FontAwesome      from 'react-fontawesome';
import {Row , Col} from 'reactstrap';
import { movieSelector } from '../../../../redux/movies/movie';
import { connect } from 'react-redux';
import moviesService from '../../../../services/movies';
import Crew from './Crew';



class ContentHeader extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let detail = this.props.detail;
    // console.log(this.props.credits);


    return (
      <div>
        <div className="background_under" style={{backgroundImage: `url(${process.env.MOVIE_IMG_URL + 'w1400_and_h450_bestv2' + detail.backdrop_path}) `}}>

        </div>

        <div className="contentHeader d-flex">
          <div>
            <img src={process.env.MOVIE_IMG_URL + 'w300_and_h450_bestv2' +
            detail.poster_path} alt={detail.title} placeholder={detail.title} />
          </div>

          <div className="info_movie">
            <h1>{detail.original_title} ({new Date(detail.release_date).getFullYear()})</h1>

            <div className="action d-flex">
              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="list"
                  />
                </a>
              </div>

              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="heart"
                  />
                </a>
              </div>

              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="bookmark"
                  />
                </a>
              </div>

              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="star"
                  />
                </a>
              </div>

              <div style={{ lineHeight: '300%', margin: '0px 10px'}}>
                <a href="#">
                  <FontAwesome
                    name="play"
                  />
                  {' '}
                  Play trailer
                </a>
              </div>
            </div>

            <div>
              <h4>Overview</h4>
              <div>
                {detail.overview}
              </div>
              <br />

              <Crew />
            </div>
          </div>
        </div>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    detail: movieSelector(state).detail,
  };
};

export default connect(mapStateToProps, undefined)(ContentHeader);
