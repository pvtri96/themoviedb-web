import React, {Component} from 'react';
import FontAwesome      from 'react-fontawesome';
import { movieSelector } from '../../../redux/movies/detail';
import { connect } from 'react-redux';
import Crew from './Crew';
import {
  Modal , Input, option
} from 'reactstrap';

import Services from '../../../service';

class ContentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      posterId : 0
    };

    this.toggle = this.toggle.bind(this);
    this.setPosterId = this.setPosterId.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  setPosterId(temp, max, min = 0) {
    if(temp) {
      if(this.state.posterId == max-1) {
        this.setState({
          posterId: 0
        });
      }
      else {
        this.setState({
          posterId: this.state.posterId + 1
        });
      }
    }
    else {
      if(this.state.posterId == min) {
        this.setState({
          posterId: max-1
        });
      }
      else {
        this.setState({
          posterId: this.state.posterId - 1
        });
      }
    }
  }

  render() {
    let detail = this.props.detail;
    let posters = detail.images.posters;
    let poster = Services.getElementWithIndex(posters, this.state.posterId);

    if(!detail)
      return (<div></div>);

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

            {/* modal */}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <div className="d-flex">
                <div>
                  <img width="359" height="538" src={process.env.MOVIE_IMG_URL + 'w640' +
                  poster.file_path}
                  crossOrigin="anonymous"/>
                </div> {/* left modal */}

                {/* content-modal */}
                <div className="content-modal">
                  <div className="header-modal">
                    <div style={{textAlign: 'right'}} onClick={this.toggle}>
                      <FontAwesome
                        className="icon"
                        name="times"
                      />
                    </div>

                    <br/>

                    <div className="d-flex justify-content-between">
                      <div className="title">Info</div>

                      <FontAwesome
                        className="icon"
                        name="lock"
                      />
                    </div>

                    <hr/>
                  </div> {/* header modal */}

                  <div className="info-img">
                    <div className="title">Primary ?</div>
                    <div>
                      <FontAwesome
                        name="times-circle"
                      />
                    </div>
                    <br/>

                    <div className="title">Added by</div>
                    <div> Tran Van Thuc</div>
                    <br/>

                    <div className="title">Size</div>
                    <div>
                      {poster.width}x{poster.height} {' '}
                      <FontAwesome
                        name="check-circle"
                      />
                    </div>
                    <br/>

                    <div className="title">Language</div>
                    <div style={{marginTop: '5px'}}>
                      <Input type="select" disabled name="select" id="exampleSelect">
                        <option>English</option>

                      </Input>
                    </div>

                    <br/>
                  </div>

                  <hr/>
                  <br/>
                  <div className="d-flex justify-content-between info-footer">
                    <div onClick={() => this.setPosterId(false,posters.length)}>
                      <FontAwesome className="icon" name="arrow-circle-left"
                        style={{ fontSize: '25px'}}
                      />
                    </div>
                    <div onClick={() => this.setPosterId(true,posters.length)}>
                      <FontAwesome className="icon" name="arrow-circle-right"
                        style={{ fontSize: '25px'}}
                      />
                    </div>
                  </div>

                </div> {/* right modal */}
              </div> {/* d-flex */}
            </Modal>

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

  };
};

export default connect(mapStateToProps, undefined)(ContentHeader);
