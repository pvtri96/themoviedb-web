import React from 'react';
import Link from 'next/link';
import Service  from '../../../service/index';
import Genres from '../../genres/Genres';

const TVShows = (props) => {
  let tvshow = props.tvshow;
  return (
    <div className="list-item poster-card">
      <Link href={`/tv-show/tvshow-details?id=${tvshow.id}`}>
        <div className="item d-flex mb-5">
          <div className="image">
            <img className="item-poster" alt={ tvshow.original_name } src={ process.env.IMAGE_URL+tvshow.poster_path } />
            <div className="overlay">
              <div className="overlay-content">Hello world</div>
            </div>
          </div>
          <div className="item-info">
            <div className="item-title d-flex">
              <a href={`/tv-show/tvshow-details?id=${tvshow.id}`}>
                <span className="title">{ Service.subTitleString(tvshow.original_name,25) }</span>
              </a>
              <div className="vote-average">
                <span>{ tvshow.vote_average }</span>
                <i className=" pl-1 fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
            <div className="relate-year d-flex">
              <span>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <span className="pl-1">{ Service.subDateString(tvshow.first_air_date,4) }</span>
              </span>
              <Genres genre_ids = {tvshow.genre_ids}/>
            </div>
            <div className="overview">{ Service.subContentString(tvshow.overview,25) }</div>

            <p className="view-more d-flex p-3">
              <a href=""> More Info </a>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TVShows;

