import React, { Component } from 'react';
import {connect} from 'react-redux';
import stylesheet from '../../people/People.scss';
import {Row, Modal, ModalHeader, ModalBody,CardImg, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { personSelector } from '../../../redux/person';
import FontAwesome from 'react-fontawesome';
import PeopleServices from '../../../../services/PeopleServices';

class TopHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render(){
    //console.log(this.props.person);
    //console.log(this.props.know_for);
    //console.log(this.props.externalIds);
    console.log(this.props.tagged_images);
    let person = this.props.person;
    let externalIds = this.props.externalIds;
    let tagged_images = this.props.tagged_images;
    let biography = String(person.biography);
    let reduceBiography = PeopleServices.reduceWord(biography, 109);

    //condition render facebook, twitter, instagram link
    let facebook , twitter, instagram;
    if(externalIds.facebook_id){
      facebook = (
        <span>
          <a href = {'https://www.facebook.com/' + externalIds.facebook_id} target = "_blank">
            <FontAwesome style = {{color:'white'}} name = 'facebook-square' /></a>{'  '}
        </span>
      );
    }
    if(externalIds.twitter_id){
      twitter = (
        <span>
          <a href = {'https://twitter.com/'+ externalIds.twitter_id} target = "_blank">
            <FontAwesome style = {{color:'white'}} name = 'twitter-square' /></a>{'  '}
        </span>
      );
    }
    if(externalIds.instagram_id){
      instagram = (
        <span>
          <a href = {'https://instagram.com/' + externalIds.instagram_id} target = "_blank">
            <FontAwesome style = {{color:'white'}} name = 'camera-retro' /></a>{'  '}
        </span>
      );
    }
    //render read more
    let read_more;
    if(PeopleServices.reduceText(biography).length > 305) {
      read_more = (
        <span>
          <a href = "#" onClick = {this.toggle} className = "read_more">Read more </a>
          <Modal isOpen = {this.state.modal} toggle = {this.toggle} className = "modal_biogr" >
            <ModalHeader className = "md_header" toggle = {this.toggle}>Biograpphy</ModalHeader>
            <ModalBody >
              {biography.split('\n').map((item, index) => {
                return <span key = {index}>{item}<br/> </span>;
              })}
            </ModalBody>
          </Modal>
        </span>
      );
    }
    //style of background
    let Background = `https://image.tmdb.org/t/p/w1440_and_h405_bestv2/`
                      + tagged_images.results[0].media.backdrop_path;
    let bg_style = {
      width: "100%",
      height: "400px",
      backgroundRepeat: "repeat-x",
      backgroundPosition: "top",
      backgroundImage: `url(${Background})`
    };
    return (
      <div>
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        <div style = {bg_style} >
          <Row  >
            <Row >
              <Col className="bg-image" xs = "3" sm="4">
                <CardImg top className = "per_img" src = {process.env.IMAGE + person.profile_path}
                  alt = "Can't show the image" />
              </Col>
              <Col xs = "8" className = "text_biogrh">
                <h2>{person.name} {' '}
                  {facebook}
                  {twitter}
                  {instagram}
                </h2>
                <h4>Biorgaphy</h4>
                <p >
                  {reduceBiography.split('\n').map((item, index) => {
                    return <span key = {index}>{item}<br/> </span>;
                  })}</p>
                {read_more}
              </Col>
            </Row>
          </Row>
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
