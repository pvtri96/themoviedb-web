import React, { Component } from 'react';
import {
  Tooltip
} from 'reactstrap';
import Link from 'next/link';
import FontAwesome from 'react-fontawesome';
import stylesheet from './Movie.scss';
import MoviesService from '../../services/movies/moviesService';



const lengthTitle = 5;
const lengthOverview = 25;


class Movie extends Component  {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    let movie = this.props.movie;
    let genres = this.props.genres;
    return (

      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        {this.state.tooltipOpen ?
          <div className="tooltipHeartbeat">
            <div>
              Hello world ! <br/>
              I'm handsome !
            </div>
            <div className="sort_down">
              <FontAwesome
                name="sort-down"

              />
            </div>
          </div> : ''
        }

        <div className="content-movie">
          <div className="img">
            <Link href={`/movies/movie-detail?id=${movie.id}`}>
              <a>
                <img src={process.env.MOVIE_IMG_URL + 'w185_and_h278_bestv2' +
                movie.poster_path} alt={movie.title} placeholder={movie.title} />

                <div  className="meta">
                  <span onMouseOver={this.toggle} onMouseLeave={this.toggle}>
                    <FontAwesome
                      name="heartbeat"
                      style={{ fontSize: '25px', color: '#c0392b'}}
                    />
                  </span>
                </div>
              </a>
            </Link>


          </div>

          <div className="content">
            <div className="info" >
              <div className="title">
                <Link href={`/movies/movie-detail?id=${movie.id}`}>
                  <a className="link_title">
                    {MoviesService.reduceWordsText(movie.title,lengthTitle)}
                  </a>
                </Link>

                <span style={{float:'right'}}>
                  {movie.vote_average.toFixed(1)} 	{' '}
                  <FontAwesome
                    name="star"
                  />
                </span>
              </div>

              <div className="release_day">
                <FontAwesome
                  name="calendar"
                /> 	&nbsp;
                {new Date(movie.release_date).getFullYear()}

                <span className="genres">
                  <i>{MoviesService.reducerLengthText(genres, 35)}</i>
                </span>
              </div>

              <div className="overview">
                {MoviesService.reduceWordsText(movie.overview,lengthOverview)}
              </div>
            </div>



            <div className="more_info">
              <Link href={`/movies/movie-detail?id=${movie.id}`}>
                <a >
                  More info
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
