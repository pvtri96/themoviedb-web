import React from 'react';
import Link from 'next/link';
import Service  from '../../../service/index';
import ImageOverlay from '../ImageOverlay';
import MainStyle from '../style.scss';
import style from './style.scss';
import Genres from '../../genres/Genres';

const Index = (props) => {
  let data = props.data;
  return (
    <div className="list-item backdrop-card" >
      <style dangerouslySetInnerHTML={{ __html: MainStyle }} />
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <Link href=''>
        <div className="item mb-4">
          <div className="image">
            <img className="item backdrop" alt={ data.original_name } src={ process.env.IMAGE_URL+data.backdrop_path } />
            <ImageOverlay />
          </div>
          <div>
            <div className="item-info">
              <div className="item title d-flex">
                <a href=''>
                  <span className="title">{ Service.subTitleString(data.original_name,25) }</span>
                </a>
                <div className="vote-average ml-auto">
                  <span>{ data.vote_average }</span>
                  <i className=" pl-1 fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
              <div className="item desc d-flex">
                <Genres genre_ids = {data.genre_ids}/>
                <div className="relate-year d-flex">
                  <span>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span className="pl-1">{ Service.subDateString(data.first_air_date,4) }</span>
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

export default Index;


