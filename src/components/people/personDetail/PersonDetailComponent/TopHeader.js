import React, { Component } from 'react';
import {connect} from 'react-redux';
import stylesheet from '../../People.scss';
import {Modal, ModalHeader, ModalBody,CardImg} from 'reactstrap';
import PropTypes from 'prop-types';
import { personSelector } from '../../../../redux/people/person';
import FontAwesome from 'react-fontawesome';
import PeopleServices from '../../../../services/people/PeopleServices';

class TopHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalReadMore: false,
<<<<<<< HEAD:src/components/people/personDetail/PersonDetailComponent/TopHeader.js
      modalExpand:false
    };
    this.toggleReadMore = this.toggleReadMore.bind(this);
    this.toggleExpand= this.toggleExpand.bind(this);
=======
      modalZoomImage: false
    };
    this.toggleReadMore = this.toggleReadMore.bind(this);
    this.toggleZoomImage = this.toggleZoomImage.bind(this);

>>>>>>> c24f2309d4982c24f7888ed26d5a1ec451599077:src/components/people/PersonDetailComponent/TopHeader.js
  }
  toggleReadMore() {
    this.setState({
      modalReadMore: !this.state.modalReadMore
<<<<<<< HEAD:src/components/people/personDetail/PersonDetailComponent/TopHeader.js
=======
    });
  }
  toggleZoomImage() {
    this.setState({
      modalZoomImage: !this.state.modalZoomImage
>>>>>>> c24f2309d4982c24f7888ed26d5a1ec451599077:src/components/people/PersonDetailComponent/TopHeader.js
    });
  }

  toggleExpand() {
    this.setState({
      modalExpand: !this.state.modalExpand
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
    console.log(this.props.person_image);
    let person = this.props.person;
    let person_image = this.props.person_image;
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
<<<<<<< HEAD:src/components/people/personDetail/PersonDetailComponent/TopHeader.js
    //render expand
    let expand;
    expand = (
      <span>
        <a href = "#" onClick = {this.toggleExpand} className = "read_more">
          <h3 className="text"><FontAwesome style = {{color:'white'}} name = 'search-plus'/>{' '}Expand</h3>
        </a>
        <Modal isOpen = {this.state.modalExpand} toggle = {this.toggleExpand} className = "modal_biogr" >
          <nav className="expand_image_nav">
            <CardImg top className = "expand_image"  style={{float:"left", boder_bottom:"0"}}
              src = {process.env.IMAGE + person_image.profiles[1].file_path}
              alt = {person.name}  />
            <div className="expand_infor">
              <ModalHeader className = "expand_close"  style={{boder_bottom:"0"}} toggle = {this.toggleExpand}></ModalHeader>
              <div className="expand_content">
                <p>Infor</p><hr />
                <p className="expand_text">Added By <br /><a href="#">iceman48</a></p>
                <p className="expand_text">
                  Size <br />
                  <a href="#" >
                    {person_image.profiles[1].width} x {person_image.profiles[1].height}{' '}
                  </a>
                  <FontAwesome  name = "check-circle" />
                </p>
                <p >
                  Tagged People
                  <a href="#" ><FontAwesome  name = "plus-circle" style={{float:"right"}} /></a>
                </p><hr />
                <p>No record have been added</p>
              </div>
            </div>
          </nav>
        </Modal>
      </span>
    );
=======
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
>>>>>>> c24f2309d4982c24f7888ed26d5a1ec451599077:src/components/people/PersonDetailComponent/TopHeader.js
    return (
      <div className="topheader ">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        <div style = {bg_style} >
          <div className="container m-auto d-flex">

<<<<<<< HEAD:src/components/people/personDetail/PersonDetailComponent/TopHeader.js
          <div className="bg-image">
            <CardImg top className = "per_img" src = {process.env.IMAGE + person.profile_path}
              alt = {person.name}  />
            <div className="zoom_image">
              {expand}
=======
            <div className="bg-image">
              <CardImg top className = "per_img" src = {process.env.IMAGE + person.profile_path}
                alt = {person.name}  />
              <div className="zoom_image">
                <h3 className="text">
                  {zoomImage}
                </h3>
              </div>
>>>>>>> c24f2309d4982c24f7888ed26d5a1ec451599077:src/components/people/PersonDetailComponent/TopHeader.js
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
  //tagged_images: PropTypes.object,
  person_image: PropTypes.object,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    person: personSelector(state).person,
    externalIds: personSelector(state).externalIds,
    //tagged_images: personSelector(state).tagged_images,
    person_image: personSelector(state).person_image,
  };
};

const HeaderConnect = connect(mapStateToProps, undefined)(TopHeader);

export default HeaderConnect;