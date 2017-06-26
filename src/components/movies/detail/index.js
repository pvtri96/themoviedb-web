import React , { Component }from 'react';

import PropTypes        from 'prop-types';
import { connect } from 'react-redux';
import { movieSelector } from '../../../redux/movies/movie';
import header from './css/header.scss';
import contentHeader from './css/contentHeader.scss';
import contentWrapper from './css/contentWrapper.scss';
import greyColumn from './css/greyColumn.scss';
import whiteColumn from './css/whiteColumn.scss';

import ContentHeader from './ContentHeader';
import ContentWrapper from './ContentWrapper';
import WhiteColumn from './WhiteColumn';
import GreyColumn from './GreyColumn';



// <div>
//   <div className="rating">
//     <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
//   </div>
// </div>




class MovieDetailShowing extends Component
{
  constructor(props)
  {
    super(props);

  }



  render()
  {
    let detail = this.props.detail;

    return (
      <div >
        <style dangerouslySetInnerHTML={{ __html: header }} />

        <div className="header" style={{backgroundImage: `url(${process.env.MOVIE_IMG_URL + 'w1400_and_h450_bestv2' + detail.backdrop_path}) `}}>

        </div>

        <style dangerouslySetInnerHTML={{ __html: contentHeader }} />
        <ContentHeader />
        {/* contentHeader */}

        <style dangerouslySetInnerHTML={{ __html: contentWrapper }} />
        <ContentWrapper />
        {/* content_wrapper */}

        <div className="column_wrapper d-flex" >

          <style dangerouslySetInnerHTML={{ __html: whiteColumn }} />
          <WhiteColumn />
          {/* white_column  */}

          <style dangerouslySetInnerHTML={{ __html: greyColumn }} />
          <GreyColumn />
        </div> {/* column_wrapper */}



      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    detail: movieSelector(state).detail,
  };
};


MovieDetailShowing.propTypes = {
  movieDetail: PropTypes.object
};

export default connect(mapStateToProps, undefined)(MovieDetailShowing);
