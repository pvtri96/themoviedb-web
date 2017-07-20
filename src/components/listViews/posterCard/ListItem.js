import React from 'react';
import Link from 'next/link';
import Service  from '../../../service/index';
import Genres from '../../genres/Genres';
import ImageOverlay from '../ImageOverlay';
import MainStyle from '../style.scss';
import style from './style.scss';
const Index = (props) => {
  let data = props.data;
  return (

    <div className="list-item poster-card">
      <style dangerouslySetInnerHTML={{ __html: MainStyle }} />
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <Link href=''>
        <div className="item d-flex mb-5">
          <div className="image">
            <img className="item-poster" alt={ data.original_name } src={ process.env.IMAGE_URL+data.poster_path } />
            <ImageOverlay />
          </div>
          <div className="item-info">
            <div className="item-title d-flex">
              <a href=''>
                <span className="title">{ Service.subTitleString(data.original_name,25) }</span>
              </a>
              <div className="vote-average">
                <span>{ data.vote_average.toFixed(1) }</span>
                <i className=" pl-1 fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
            <div className="relate-year d-flex">
              <span>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <span className="pl-1">{ Service.subDateString(data.first_air_date,4) }</span>
              </span>
              <Genres genre_ids = {data.genre_ids}/>
            </div>
            <div className="overview">{ Service.subContentString(data.overview,25) }</div>

            <p className="view-more d-flex p-3">
              <a href=""> More Info </a>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Index;
// <Link href={`/tv-show/tvshow-details?id=${tvshow.id}`}>
