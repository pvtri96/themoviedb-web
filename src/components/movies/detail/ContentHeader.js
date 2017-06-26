import React, {Component} from 'react';
import FontAwesome      from 'react-fontawesome';
import {Row , Col} from 'reactstrap';
import { movieSelector } from '../../../redux/movies/movie';
import { connect } from 'react-redux';
import moviesService from '../../../services/movies';


const limitLengthCrew = 6;

class ContentHeader extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let detail = this.props.detail;
    // console.log(this.props.credits);
    let credits = this.props.credits;
    if(!credits)
      return (
        <div></div>
      );
    let crew = moviesService.getCrewMovie(credits.crew, limitLengthCrew);

    return (
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
            <h4>Featured Crew</h4>
            <Row >
              {crew.map(item=> (
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
        </div>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    detail: movieSelector(state).detail,
    credits: movieSelector(state).credits,
  };
};

export default connect(mapStateToProps, undefined)(ContentHeader);
