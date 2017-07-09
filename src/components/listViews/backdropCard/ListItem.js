import React from 'react';
import Link from 'next/link';
import Service  from '../../../service/index';
import ImageOverlay from '../ImageOverlay';
import MainStyle from '../style.scss';
import style from '../posterCard/style.scss';
import Genres from '../../genres/Genres';

const TVShows = (props) => {
  let tvshow = props.tvshow;
  return (
    <div className="list-item backdrop-card" >
      <style dangerouslySetInnerHTML={{ __html: MainStyle }} />
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <Link href={`/tv-show/tvshow-details?id=${tvshow.id}`}>
        <div className="item mb-4">
          <div className="image">
            <img className="item-poster" alt={ tvshow.original_name } src={ process.env.IMAGE_URL+tvshow.backdrop_path } />
            <ImageOverlay />
          </div>
          <div>
            <div className="item-info">
              <div className="item-title d-flex">
                <a href={`/tv-show/tvshow-details?id=${tvshow.id}`}>
                  <span className="title">{ Service.subTitleString(tvshow.original_name,25) }</span>
                </a>
                <div className="vote-average ml-auto">
                  <span>{ tvshow.vote_average }</span>
                  <i className=" pl-1 fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
              <div className="item-a d-flex">
                <div className="relate-year d-flex">
                  <Genres genre_ids = {tvshow.genre_ids}/>
                  <span>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span className="pl-1">{ Service.subDateString(tvshow.first_air_date,4) }</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TVShows;


