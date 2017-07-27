import React from 'react';
import Link from 'next/link';
import Service  from '../../../service/index';
import ImageOverlay from '../ImageOverlay';
import MainStyle from '../style.scss';
import style from './style.scss';
import Genres from '../../genres/Genres';
import { menuSelector } from '../../../redux/menu';
import { connect } from 'react-redux';

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
  return (
    <div className="list-item backdrop-card" >
      <style dangerouslySetInnerHTML={{ __html: MainStyle }} />
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <Link href=''>
        <div className="item mb-4">
          <div className="image">
            <img className="item backdrop" alt={ dataTitle } src={ process.env.IMAGE_URL+data.backdrop_path } />
            <ImageOverlay />
          </div>
          <div>
            <div className="item-info">
              <div className="item title d-flex">
                <a href=''>
                  <span className="title">{ Service.subTitleString(dataTitle,25) }</span>
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
                    <span className="pl-1">{ Service.subDateString(dataDate,4) }</span>
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

const mapStateToProps = state => {
  return {
    menu: menuSelector(state).menuTitle
  };
};

export default connect(mapStateToProps,undefined)(Index);
