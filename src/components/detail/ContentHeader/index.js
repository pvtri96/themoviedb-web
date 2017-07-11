import React, {Component} from 'react';
import FontAwesome      from 'react-fontawesome';
import { movieSelector } from '../../../redux/movies/detail';
import { connect } from 'react-redux';
import Crew from './Crew';
// import moviesService from '../../../../services/movies';
// import * as Vibrant from 'node-vibrant';
import {
  Modal , Input, option,
} from 'reactstrap';



class ContentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }



  render() {
    let detail = this.props.detail;

    console.log(detail);
    if(!detail)
      return (<div></div>);

    return (
      <div >


        <div className="background_under" style={{backgroundImage: `url(${process.env.MOVIE_IMG_URL + 'w1400_and_h450_bestv2' + detail.backdrop_path}) `}}>

        </div>


        <div className="content_header d-flex">
          <div className="img_movie" >
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
            <Modal dialogClassName="movie_modal" isOpen={this.state.modal} toggle={this.toggle} style={{ overflow: 'scroll'}}>
              <div className="d-flex justify-content-around">
                <div className="mr-auto" style={{}}>
                  <img width="359" src={process.env.MOVIE_IMG_URL + 'w640' +
                  detail.poster_path} alt={detail.title} placeholder={detail.title}
                  crossOrigin="anonymous"/>
                </div>



                <div className="info_poster" >
                  <div className="header_modal">
                    <h5  onClick={this.toggle}>
                      <FontAwesome
                        name="times"
                        style={{cursor: 'pointer'}}
                      />
                    </h5>

                    <div className="d-flex justify-content-between">
                      <h6>Info</h6>

                      <FontAwesome
                        name="lock"
                      />
                    </div>
                  </div>

                  <hr />
                  <div className="info_img">
                    <h6>Primary ?</h6>
                    <FontAwesome
                      name="times-circle"
                    />
                    <br/><br/>

                    <h6>Added by</h6>
                    <label> Tran Van Thuc</label>
                    <br/><br/>

                    <h6>Size</h6>
                    <label>
                      2000x3000 {' '}
                      <FontAwesome
                        name="check-circle"
                      />
                    </label>
                    <br/><br/>

                    <h6>Language</h6>
                    <Input type="select" disabled name="select" id="exampleSelect">
                      <option>Englist</option>

                    </Input>

                    <br/>
                  </div>

                  <hr/>

                  <div className="d-flex justify-content-between info_footer">
                    <div>
                      <FontAwesome name="arrow-circle-left"
                        style={{ fontSize: '25px'}}
                      />
                    </div>
                    <div>
                      <FontAwesome name="arrow-circle-right"
                        style={{ fontSize: '25px'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Modal>

          </div>

          <div className="info_movie">
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
