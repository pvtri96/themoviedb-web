import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import stylesheet from '../../People.scss';
import TopHeader from '../PersonDetailComponent/TopHeader';
import PersonInf from '../PersonDetailComponent/PersonInf';
import PersonContent from '../PersonDetailComponent/PersonContent';
import { personSelector } from '../../../../redux/people/person';

class PersonDetail extends Component{
  constructor(props){
    super(props);
  }

  render(){
    //style of background
    let tagged_images = this.props.tagged_images;
    let Background = process.env.BACKGROUND_IMAGE
                      + tagged_images.results[0].media.backdrop_path;
    let bg_style = {
      width: "100%",
      height: "402px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      backgroundImage: `url(${Background})`
    };
    //<Random value=https://image.tmdb.org/t/p/w1440_and_h405_bestv2`
    //+ tagged_images.results[0].media.backdrop_path}' tag='img' />
    return (
      <div className="background">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        <div style = {bg_style} >
          <TopHeader />
        </div>
        <div className = "d-flex per_inf container">
          <PersonInf />
          <PersonContent />
        </div>
      </div>
    );
  }
}
PersonDetail.propTypes = {
  tagged_images: PropTypes.object,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tagged_images: personSelector(state).tagged_images,
  };
};

const personConnect = connect(mapStateToProps, undefined)(PersonDetail);

export default personConnect;

