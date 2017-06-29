import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { detailsSelector } from '../../redux/detail';
import Service  from '../../service/index';
class Details extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let tvshowDetails = this.props.tvshowDetails;
    return (
      <div className="body-content d-flex">
        <div className="background d-flex" style={{backgroundImage: `url(${process.env.POSTER_BACK_URL+tvshowDetails.backdrop_path})`}} >
          <div className="container d-flex">
            <img className="poster details" alt={ tvshowDetails.original_name } src={ process.env.IMAGE_URL+tvshowDetails.poster_path } />
            <div className="info details">
              <div className="title-bar d-flex">
                <span className="title">{ tvshowDetails.original_name } </span>
                <span className="first-air-date">({ Service.subDateString(tvshowDetails.first_air_date,4) })</span>
              </div>
              <div className="menu d-flex">
                <div>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div>
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div>
                  <i className="fa fa-bookmark" aria-hidden="true"></i>
                </div>
                <div>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
              <div className="overview">
                <span className="title d-flex">Overview</span>
                <span className="content">{ tvshowDetails.overview }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => ({
  tvshowDetails: detailsSelector(state).detail
});

export default connect ( mapStateToProp, undefined )( Details );
