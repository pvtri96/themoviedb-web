import React , { Component }from 'react';
import {Row , Col} from 'reactstrap';
import PropTypes        from 'prop-types';
import FontAwesome      from 'react-fontawesome';
import { connect } from 'react-redux';
import { movieSelector } from '../../redux/movies/movie';
import stylesheet from './MovieDetail.scss';
import moviesService from '../../services/movies/moviesService';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';



// <div>
//             <div className="rating">
//               <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
//             </div>
//           </div>

const limitCrew = 6;
const limitTopBilledCast = 5;
const lengthTitle = 4;

class MovieDetailShowing extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      tooltipOpen: false
    };

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    window.history.back();
  }



  render()
  {
    let movieDetail = this.props.movieDetail;
    let credits = this.props.credits;
    let crew = moviesService.getCrewMovie(credits.crew, limitCrew);
    let topBilledCast = moviesService.getTopBilledCast(credits.cast, limitTopBilledCast);
    let review = moviesService.getRandomReview(this.props.reviews);
    let videos = this.props.videos;
    let video = videos[0];
    let recommendations = this.props.recommendations.slice(0,8);
    return (
      <div >
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="header" style={{backgroundImage: `url(${process.env.MOVIE_IMG_URL + 'w1400_and_h450_bestv2' + movieDetail.backdrop_path}) `}}>

        </div>

        <div className="contentHeader d-flex">
          <div>
            <img src={process.env.MOVIE_IMG_URL + 'w300_and_h450_bestv2' +
            movieDetail.poster_path} alt={movieDetail.title} placeholder={movieDetail.title} />
          </div>

          <div className="info_movie">
            <h1>{movieDetail.original_title} ({new Date(movieDetail.release_date).getFullYear()})</h1>

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
                {movieDetail.overview}
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


        </div> {/* contentHeader */}

        <div className="content_wrapper">
          <div className="shortcut_bar">
            <Link href="#" >
              <a>
                Discussions
              </a>
            </Link>
          </div>
          <div className="shortcut_bar">
            <Link href="#" >
              <a>
                Reviews
              </a>
            </Link>

          </div>

          <div className="shortcut_bar">
            <Link href="#" >
              <a>
                Videos
              </a>
            </Link>

          </div>

          <div className="shortcut_bar">
            <Link href="#" >
              <a>
                Images
              </a>
            </Link>

          </div>

          <div className="shortcut_bar">
            <Link href="#" >
              <a>
                Changes
              </a>
            </Link>

          </div>

          <div className="shortcut_bar">
            <Link href="#" >
              <a>
                Report
              </a>
            </Link>

          </div>

          <div className="shortcut_bar">
            <Link href="#" >
              <a>
                Share
              </a>
            </Link>

          </div>

          <div className="shortcut_bar">
            <Link href="#" >
              <a>
                Edit
              </a>
            </Link>

          </div>

        </div> {/* content_wrapper */}

        <div className="column_wrapper" >
          <div className="white_column">
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

            <div className="d-flex">
              <h4>Social</h4>
              <div className="menu">
                <div className="menu_item active">Reviews {this.props.reviews.length}</div>
                <div className="menu_item">Discussions</div>
              </div>
            </div> {/* Social */}

            <div className="grouped">
              <div className="avatar">
                <img width="100" src="https://football-board.de/img/default_user.jpg" alt="user image"/>
              </div> {/* avatar */}

              <div className="info">
                <h4>A review by {review.author}</h4>
                <p><strong>By</strong> {review.author}</p>
                <div >
                  <ReactMarkdown source={moviesService.reduceWordsText(review.content,105)} />
                  <Link href="#">
                    <a className="link"><b>Read more</b></a>
                  </Link>
                </div>
              </div>
            </div> { /* grouded */}


            <Link href="#">
              <a className="link"><h5>Read All Reviews</h5></a>
            </Link>
            <br/>
            <hr/>

            <div className="d-flex">
              <h4>Media</h4>
              <div className="menu">
                <div className="menu_item active">Most Popular</div>
                <div className="menu_item">Videos {videos.length}</div>
                <div className="menu_item">Backdrops</div>
                <div className="menu_item">Posters</div>
              </div>
            </div> {/* Media */}

            <div className="content_media d-flex">
              <div className="video">
                <iframe id="cartoonVideo" width="533" height="300" src={process.env.TRAILER_URL + video.key}
                  frameBorder="0" allowFullScreen></iframe>
              </div>

              <div className="backdrop">
                <img src={process.env.MOVIE_IMG_URL + 'w533_and_h300_bestv2' +
                movieDetail.backdrop_path} alt={movieDetail.title} placeholder={movieDetail.title} />
              </div>

              <div className="poster">
                <img src={process.env.MOVIE_IMG_URL + 'w200_and_h300_bestv2' +
                movieDetail.poster_path} alt={movieDetail.title} placeholder={movieDetail.title} />
              </div>
            </div>
            <hr/>

            <div >
              <h4>Recommendations</h4>
              <div className="recommendations">
                {recommendations.map(item => (
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
                      <Link href={`/movies/movie-detail?id=${item.id}`}>
                        <a className="link_title">
                          {moviesService.reduceWordsText(item.title,lengthTitle)}
                        </a>
                      </Link>

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
            </div> {/* Media */}

          </div> {/* white_column */}

          <div className="grey_column">
            grey
          </div>
        </div> {/* column_wrapper */}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movieDetail: movieSelector(state).detail,
    credits: movieSelector(state).credits,
    reviews: movieSelector(state).reviews,
    videos: movieSelector(state).videos,
    recommendations: movieSelector(state).recommendations
  };
};

MovieDetailShowing.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  goBack: PropTypes.func
};

export default connect(mapStateToProps, undefined)(MovieDetailShowing);
