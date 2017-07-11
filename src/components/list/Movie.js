import React, { Component } from 'react';
import {
} from 'reactstrap';
import Link from 'next/link';
import stylesheet from './Movie.scss';
import moviesService from '../../service';
import FontAwesome from 'react-fontawesome';
import Genres from './Genres';
import { movieListActions } from '../../redux/movies/movieList';
import { connect } from 'react-redux';
import Router from 'next/router';

const lengthTitle = 5;
const lengthOverview = 25;




class Index extends Component  {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };

  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    let movie = this.props.movie;

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
            <img onClick={() => {
              this.props.fetchCurrentMovie(movie);
              Router.push(`/movies/movie-detail?id=${movie.id}`);
            }} src={process.env.MOVIE_IMG_URL + 'w185_and_h278_bestv2' +
            movie.poster_path} alt={movie.title} placeholder={movie.title} />

            <div className="meta">
              <span onMouseOver={this.toggle} onMouseLeave={this.toggle}>
                <FontAwesome
                  name="heartbeat"
                  style={{ fontSize: '25px', color: '#c0392b'}}
                />
              </span>
            </div>


          </div>

          <div className="content">
            <div className="info" >
              <div className="title">

                <span onClick={() => {
                  this.props.fetchCurrentMovie(movie);
                  Router.push(`/movies/movie-detail?id=${movie.id}`);
                }} className="link_title">{moviesService.reduceWordsText(movie.title,lengthTitle)}</span>

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
                <Genres genre_ids={movie.genre_ids} />

              </div>

              <div className="overview">
                {moviesService.reduceWordsText(movie.overview,lengthOverview)}
              </div>
            </div>



            <div className="more_info" onClick={() => {
              this.props.fetchCurrentMovie(movie);
              Router.push(`/movies/movie-detail?id=${movie.id}`);
            }}>
              More info
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentMovie: (movie, callback) => {
      dispatch(movieListActions.fetchCurrentMovie(movie), callback);
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Index);
