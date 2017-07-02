import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import stylesheet from '../people/People.scss';
import TopHeader from './PersonDetailComponent/TopHeader';
import PersonInf from './PersonDetailComponent/PersonInf';
import PersonContent from './PersonDetailComponent/PersonContent';
import { personSelector } from '../../redux/person';

class PersonDetail extends Component{
  constructor(props){
    super(props);
  }

  render(){

    //<Random value=https://image.tmdb.org/t/p/w1440_and_h405_bestv2`
    //+ tagged_images.results[0].media.backdrop_path}' tag='img' />
    return (
      <div className="background">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        <TopHeader />
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

