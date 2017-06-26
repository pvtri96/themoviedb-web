import React , { Component }from 'react';

import PropTypes        from 'prop-types';
import { connect } from 'react-redux';
import { movieSelector } from '../../../redux/movies/movie';
import stylesheet from './MovieDetail.scss';

import ContentHeader from './ContentHeader';
import ContentWrapper from './ContentWrapper';
import WhiteColumn from './WhiteColumn';
import { movieActions } from '../../../redux/movies/movie';



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
    let movieDetail = this.props.movieDetail;

    return (
      <div >
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="header" style={{backgroundImage: `url(${process.env.MOVIE_IMG_URL + 'w1400_and_h450_bestv2' + movieDetail.backdrop_path}) `}}>

        </div>

        <ContentHeader />
        {/* contentHeader */}

        <ContentWrapper />
        {/* content_wrapper */}

        <div className="column_wrapper" >

          <WhiteColumn />
          {/* white_column  */}

          <div className="grey_column">
            grey
          </div>
        </div> {/* column_wrapper */}



      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movieDetail: movieSelector(state).detail,
  };
};


MovieDetailShowing.propTypes = {
  movieDetail: PropTypes.object
};

export default connect(mapStateToProps, undefined)(MovieDetailShowing);
