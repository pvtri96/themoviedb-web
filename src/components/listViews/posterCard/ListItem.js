import React from 'react';
import Link from 'next/link';
import Service  from '../../../service/index';
import Genres from '../../genres/Genres';
import ImageOverlay from '../ImageOverlay';
import MainStyle from '../style.scss';
import style from './style.scss';
import { menuSelector } from '../../../redux/menu';
import { connect } from 'react-redux';

const getLink = (menu) => {
  switch (menu) {
  case "movies":
    return "movies";
  case "tvshows":
    return "tv-show";
  default: return "movies";
  }
};

const Index = (props) => {
  let data = props.data;
  let dataTitle = props.dataTitle;
  let dataDate = props.dataDate;
  if (props.menu == "movies") {
    dataTitle =  data.original_title ;
    dataDate = data.release_date;
  }
  else {
    dataTitle = data.original_name;
    dataDate = data.first_air_date;
  }
  console.log(props.menu);
  return (
    <div className="list-item poster-card">
      <style dangerouslySetInnerHTML={{ __html: MainStyle }} />
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div className="item d-flex mb-5">
        <div className="image">
          <img className="item-poster" alt={ dataTitle } src={ process.env.IMAGE_URL+data.poster_path } />
          <ImageOverlay />
        </div>
        <div className="item-info">
          <div className="item-title d-flex">
            <a href={`/` + getLink(props.menu) + `/detail?id=${data.id}`}>
              <span className="title">{ Service.subTitleString(dataTitle,20) }</span>
            </a>
            <div className="vote-average">
              <span>{ data.vote_average.toFixed(1) }</span>
              <i className=" pl-1 fa fa-star" aria-hidden="true"></i>
            </div>
          </div>
          <div className="relate-year d-flex">
            <span>
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <span className="pl-1">{ Service.subDateString(dataDate,4) }</span>
            </span>
            <Genres genre_ids = {data.genre_ids}/>
          </div>
          <div className="overview">{ Service.subContentString(data.overview,25) }</div>

          <p className="view-more d-flex p-3">
            <a href=""> More Info </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    menu: menuSelector(state).menuTitle
  };
};

export default connect(mapStateToProps, undefined) (Index);
// <Link href={`/tv-show/tvshow-details?id=${tvshow.id}`}>




