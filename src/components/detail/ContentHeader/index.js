import React, {Component} from 'react';
import FontAwesome      from 'react-fontawesome';
import { movieSelector } from '../../../redux/movies/detail';
import { connect } from 'react-redux';
import Crew from './Crew';
import ModalView from './ModalView';
import {  movieListSelector } from '../../../redux/movies/list';
import { tvshowSelector } from '../../../redux/tvshows/detail';
import { menuSelector } from '../../../redux/menu';


class ContentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      posterId : 0
    };

    this.toggle = this.toggle.bind(this);
    this.getChanges = this.getChanges.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  getChanges(detail) {
    let result = {};
    switch(this.props.menu){
    case "movies":
    {
      result.title = detail.title;
      result.release_date = detail.release_date;
      result.jobs = ["Director", "Screenplay", "Characters", "Story", "Writer"];

      break;
    }
    case "tvshows":
    {
      result.title = detail.name;
      result.release_date = detail.first_air_date;

      result.crew = detail.created_by;
      result.jobs = "Creator";
      break;
    }
    }
    return result;

  }


  render() {



    let detail = this.props.detail;
    // if(this.props.isServer)
    //   detail = this.props.detail;
    // else
    //   detail = this.props.current;

    let images = this.props.images;

    if(!detail || !images)
      return (<div></div>);
    let changes = this.getChanges(detail);
    // console.log(changes);

    let posters = images.posters;

    let title;
    return (
      <div>
        <div className="background-under"
          style={{backgroundImage: `url(${process.env.MOVIE_IMG_URL + 'w1400_and_h450_bestv2' + detail.backdrop_path}) `}}>
        </div>

        <div className="custom-bg"></div>
        <div className="content-header d-flex">
          <div className="img-movie" >
            <img  src={process.env.MOVIE_IMG_URL + 'w300_and_h450_bestv2' +
            detail.poster_path} alt={title} placeholder={changes.title}
            crossOrigin="anonymous"/>

            <div className="zoom" onClick={this.toggle}>
              <FontAwesome
                name="search-plus"
                style={{ fontSize: '20px', color: 'white'}}
              />
            </div>

            {/* Modal */}
            <ModalView modal={this.state.modal} toggle={this.toggle} posters={posters} className={this.props.className}/>

          </div>

          <div className="info-movie">
            <h2 style={{fontWeight:'900'}}>{changes.title} ({new Date(changes.release_date).getFullYear()})</h2>

            <div className="action d-flex">
              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="list"
                    className="icon"
                  />
                </a>
              </div>

              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="heart"
                    className="icon"
                  />
                </a>
              </div>

              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="bookmark"
                    className="icon"
                  />
                </a>
              </div>

              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="star"
                    className="icon"
                  />
                </a>
              </div>

              <div style={{ lineHeight: '300%', margin: '0px 10px', color: '#ecf0f1', fontWeight: '600'}}>
                <FontAwesome
                  name="play"
                  className="icon"
                />
                {' '}
                Play trailer
              </div>
            </div>

            <div>
              <h4>Overview</h4>
              <div>
                {detail.overview}
              </div>
              <br />

              <Crew crew={changes.crew} jobs={changes.jobs} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  const menu = menuSelector(state).menuTitle;

  switch(menu) {
  case "movies":
    return {
      menu : menuSelector(state).menuTitle,
      current: movieListSelector(state).current,
      detail: movieSelector(state).detail,
      images: movieSelector(state).images,
    };
  case "tvshows":
    return {
      menu : menuSelector(state).menuTitle,
      detail: tvshowSelector(state).detail,
      images: tvshowSelector(state).images,
    };
  default:
    return {
      menu : menuSelector(state).menuTitle,
      current: movieListSelector(state).current,
      detail: movieSelector(state).detail,
      images: movieSelector(state).images,
    };
  }

};

export default connect(mapStateToProps, undefined)(ContentHeader);
