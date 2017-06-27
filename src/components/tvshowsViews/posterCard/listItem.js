import React from 'react';
import Link from 'next/link';
import SubString  from '../../../service/subString';

const TVShows = (props) => {
  let tvshow = props.tvshow;
  return (
    <Link href={`/tv-show/tvshow-details?id=${tvshow.id}`}>
      <div className="item d-flex mb-5">
        <div className="image">
          <img className="item-poster" alt={ tvshow.original_name } src={ process.env.IMAGE_URL+tvshow.poster_path } />
        </div>
        <div className="item-info">
          <div className="item-title d-flex">
            <a href={`/tv-show/tvshow-details?id=${tvshow.id}`}>
              <span className="title">{ SubString.subTitleString(tvshow.original_name,25) }</span>
            </a>
            <div className="vote-average">
              <span>{ tvshow.vote_average }</span>
              <i className=" pl-1 fa fa-star" aria-hidden="true"></i>
            </div>
          </div>
          <div className="relate-year">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <span className="pl-1">{ SubString.subDateString(tvshow.first_air_date,4) }</span>
          </div>
          <div className="overview">{ SubString.subContentString(tvshow.overview,25) }</div>
          <button className="d-flex p-3">
            <span>More Info</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default TVShows;

