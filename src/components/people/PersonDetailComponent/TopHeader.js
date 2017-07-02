import React, { Component } from 'react';
import {connect} from 'react-redux';
import stylesheet from '../../people/People.scss';
import {Modal, ModalHeader, ModalBody,CardImg} from 'reactstrap';
import PropTypes from 'prop-types';
import { personSelector } from '../../../redux/person';
import FontAwesome from 'react-fontawesome';
import PeopleServices from '../../../../services/PeopleServices';

class TopHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalReadMore: false,
      modalZoomImage: false
    };
    this.toggleReadMore = this.toggleReadMore.bind(this);
    this.toggleZoomImage = this.toggleZoomImage.bind(this);

  }
  toggleReadMore() {
    this.setState({
      modalReadMore: !this.state.modalReadMore
    });
  }
  toggleZoomImage() {
    this.setState({
      modalZoomImage: !this.state.modalZoomImage
    });
  }

  //function render external link
  renderIconLink(externalLink,linkId, iconName){
    let renderIconLink;
    if(linkId){
      renderIconLink = (
        <span>
          <a href = {externalLink + linkId} target = "_blank">
            <FontAwesome style = {{color:'white'}} name = {iconName} /></a>{'  '}
        </span>
      );
      return renderIconLink;
    }
  }
  render(){
    //console.log(this.props.person);
    //console.log(this.props.know_for);
    //console.log(this.props.externalIds);
    console.log(this.props.tagged_images);
    let person = this.props.person;
    let externalIds = this.props.externalIds;
    //let tagged_images = this.props.tagged_images;
    let biography = String(person.biography);
    let reduceBiography = PeopleServices.reduceWord(biography, 103);

    //condition render facebook, twitter, instagram link
    let facebok= this.renderIconLink(process.env.FACEBOOK ,externalIds.facebook_id, 'facebook-square');
    let twitter= this.renderIconLink(process.env.TWITTER ,externalIds.twitter_id, 'twitter-square');
    let instagram= this.renderIconLink(process.env.INSTAGRAM ,externalIds.instagram_id, 'camera-retro');

    //render read more
    let read_more;
    if(PeopleServices.reduceText(biography).length > 305) {
      read_more = (
        <span>
          <a href = "#" onClick = {this.toggleReadMore} className = "read_more">Read more </a>
          <Modal isOpen = {this.state.modalReadMore} toggle = {this.toggleReadMore} className = "modal_biogr" >
            <ModalHeader className = "md_header" toggle = {this.toggleReadMore}>Biograpphy</ModalHeader>
            <ModalBody >
              {biography.split('\n').map((item, index) => {
                return <span key = {index}>{item}<br/> </span>;
              })}
            </ModalBody>
          </Modal>
        </span>
      );
    }
    //render zoom image
    let zoomImage;
    zoomImage = (
      <span>
        <a href = "#" onClick = {this.toggleZoomImage} >
          <FontAwesome style = {{color:'white'}} name = 'search-plus'/>{' '}Expand
        </a>
        <Modal isOpen = {this.state.modalZoomImage} toggle = {this.toggleZoomImage} className = "modal_biogr" >
          <ModalHeader toggle = {this.toggleZoomImage}>Show zoom image</ModalHeader>
          <ModalBody >
            aa
          </ModalBody>
        </Modal>
      </span>
    );
    //style of background
    let tagged_images = this.props.tagged_images;
    let Background = process.env.BACKGROUND_IMAGE
                      + tagged_images.results[0].media.backdrop_path;
    let bg_style = {
      width: "100%",
      height: "400px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      backgroundImage: `url(${Background})`
    };
    return (
      <div className="topheader ">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        <div style = {bg_style} >
          <div className="container m-auto d-flex">

            <div className="bg-image">
              <CardImg top className = "per_img" src = {process.env.IMAGE + person.profile_path}
                alt = {person.name}  />
              <div className="zoom_image">
                <h3 className="text">
                  {zoomImage}
                </h3>
              </div>
            </div>

            <div className = "text_biogrh">
              <h2>{person.name} {' '}
                {facebok}
                {twitter}
                {instagram}
              </h2>
              <h4>Biorgaphy</h4>
              <p >
                {reduceBiography.split('\n').map((item, index) => {
                  return <span key = {index}>{item}<br/> </span>;
                })}</p>
              {read_more}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TopHeader.propTypes = {
  fetchPerson: PropTypes.func,
  person: PropTypes.object,
  know_for: PropTypes.object,
  externalIds:PropTypes.object,
  tagged_images: PropTypes.object,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    person: personSelector(state).person,
    externalIds: personSelector(state).externalIds,
    tagged_images: personSelector(state).tagged_images,
  };
};

const HeaderConnect = connect(mapStateToProps, undefined)(TopHeader);

export default HeaderConnect;
