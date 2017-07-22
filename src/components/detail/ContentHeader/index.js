import React, {Component} from 'react';
import FontAwesome      from 'react-fontawesome';
import { movieSelector } from '../../../redux/movies/detail';
import { connect } from 'react-redux';
import Crew from './Crew';
import ModalView from './ModalView';


class ContentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      posterId : 0
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    let detail = this.props.detail;
    let images = this.props.images;

    if(!detail || !images)
      return (<div></div>);
    let posters = images.posters;

    return (
      <div>


        <div className="background-under" style={{backgroundImage: `url(${process.env.MOVIE_IMG_URL + 'w1400_and_h450_bestv2' + detail.backdrop_path}) `}}>

        </div>

        <div className="content-header d-flex">
          <div className="img-movie" >
            <img  src={process.env.MOVIE_IMG_URL + 'w300_and_h450_bestv2' +
            detail.poster_path} alt={detail.title} placeholder={detail.title}
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
            <h1>{detail.original_title} ({new Date(detail.release_date).getFullYear()})</h1>

            <div className="action d-flex">
              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="list"
                  />
                </a>
              </div>

              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="heart"
                  />
                </a>
              </div>

              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="bookmark"
                  />
                </a>
              </div>

              <div className="item">
                <a href="#">
                  <FontAwesome
                    name="star"
                  />
                </a>
              </div>

              <div style={{ lineHeight: '300%', margin: '0px 10px'}}>
                <a href="#">
                  <FontAwesome
                    name="play"
                  />
                  {' '}
                  Play trailer
                </a>
              </div>
            </div>

            <div>
              <h4>Overview</h4>
              <div>
                {detail.overview}
              </div>
              <br />

              <Crew />
            </div>
          </div>
        </div>
      </div>
    );

  }
}

const mapStateToProps = (state) => {

  return {
    detail: movieSelector(state).detail,
    images: movieSelector(state).images,

  };
};

export default connect(mapStateToProps, undefined)(ContentHeader);
