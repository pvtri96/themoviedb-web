
import React, {Component} from 'react';
import { connect} from 'react-redux';
import { movieSelector } from '../../../redux/movies/detail';
import Link from 'next/link';
import { tvshowSelector } from '../../../redux/tvshows/detail';
import { menuSelector } from '../../../redux/menu';


const limitLengthVideos = 5;
const limitLengthBackdrops = 5;
const limitLengthPosters = 7;


const MediaShowing = (i, detail,videos,backdrops,posters) => {

  const videosLimit = videos.slice(0, limitLengthVideos);
  const backdropsLimit = backdrops.slice(0,limitLengthBackdrops);
  const postersLimit = posters.slice(0,limitLengthPosters);
  switch(i) {
  case 1:
  {
    const video = videos[0];

    return (
      <div className="content_media d-flex">
        {videos.length !== 0 ?
          <div className="video">
            <iframe id="cartoonVideo" width="533" height="300"
              src={process.env.TRAILER_URL + video.key+ "?enablejsapi=1&autoplay=0&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en-US&modestbranding=1&fs=1"}
              frameBorder="0" allowFullScreen></iframe>
          </div> :
          <div></div>
        }

        <div className="backdrop">
          <img src={process.env.MOVIE_IMG_URL + 'w533_and_h300_bestv2' +
          detail.backdrop_path} alt={detail.title} placeholder={detail.title} />
        </div>

        <div className="poster">
          <img src={process.env.MOVIE_IMG_URL + 'w200_and_h300_bestv2' +
          detail.poster_path} alt={detail.title} placeholder={detail.title} />
        </div>
      </div>
    );
  }
  case 2:
  {
    const videoShowing = videosLimit.map(video => (
      <div key={video.id} className="video">
        <iframe id="cartoonVideo" width="533" height="300"
          src={process.env.TRAILER_URL + video.key}
          frameBorder="0" allowFullScreen></iframe>
      </div>
    ));
    return (
      <div className="content_media d-flex">
        {videoShowing}
      </div>
    );
  }
  case 3:
  {
    const backdropShowing = backdropsLimit.map(backdrop => (
      <div key={backdrop.file_path} className="backdrop">
        <img src={process.env.MOVIE_IMG_URL + 'w533_and_h300_bestv2' +
        backdrop.file_path} alt={detail.title} placeholder={detail.title} />
      </div>
    ));

    return (
      <div className="content_media d-flex">
        {backdropShowing}
      </div>
    );
  }
  case 4:
  {
    const posterShowing = postersLimit.map(poster => (
      <div key={poster.file_path} className="poster">
        <img src={process.env.MOVIE_IMG_URL + 'w200_and_h300_bestv2' +
        poster.file_path} alt={detail.title} placeholder={detail.title} />
      </div>
    ));

    return (
      <div className="content_media d-flex">
        {posterShowing}
      </div>
    );
  }
  default: return (<div></div>);
  }
}; // Media Showing


const getMediaText = (i) => {
  let result = "View All ";
  switch(i) {
  case 2: return result + "Videos";
  case 3: return result + "Backdrops";
  case 4: return result + "Posters";
  }
};



class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaIndex: 1
    };
    this.onClickMedia = this.onClickMedia.bind(this);
  }

  onClickMedia (index) {
    this.setState({
      mediaIndex: index
    });
    const arr = [1,2,3,4];
    arr.map(item => {
      var element = document.getElementById("media_" + item);
      element.classList.remove("active");
    });
    var element = document.getElementById("media_" + index);
    element.classList.add("active");

  }

  render(){
    let detail = this.props.detail;
    let videos = this.props.videos;
    let images = this.props.images;

    if(!detail || !videos || !images)
      return (<div></div>);

    let backdrops = images.backdrops;
    let mediaIndex = this.state.mediaIndex;
    // let limitBackdrops = moviesService.getLimitBackdrops(backdrops, )


    let posters = images.posters;
    return (
      <div>
        <div className="d-flex">
          <h4>Media</h4>
          <div className="menu">
            <div id="media_1" onClick={() => this.onClickMedia(1)} className="menu_item active">Most Popular</div>
            <div id="media_2"onClick={() => this.onClickMedia(2)} className="menu_item">Videos {videos.length}</div>
            <div id="media_3"onClick={() => this.onClickMedia(3)} className="menu_item">Backdrops {backdrops.length}</div>
            <div id="media_4"onClick={() => this.onClickMedia(4)} className="menu_item">Posters {posters.length}</div>
            <div className="menu_item ">
              {mediaIndex !== 1 ?
                <Link href="#">
                  <a className="link view_more">{getMediaText(mediaIndex)}</a>
                </Link>
                : ""}
            </div>
          </div>
        </div> {/* Media  */}



        {MediaShowing(mediaIndex, detail,videos,backdrops,posters) }
        <br />
        <hr/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const menu = menuSelector(state).menuTitle;

  switch(menu) {
  case "tvshows":
    return {
      detail: tvshowSelector(state).detail,
      images: tvshowSelector(state).images,
      videos: tvshowSelector(state).videos
    };
  case "movies":
    return {
      detail: movieSelector(state).detail,
      images: movieSelector(state).images,
      videos: movieSelector(state).videos
    };
  default:
    return {
      detail: movieSelector(state).detail,
      images: movieSelector(state).images,
      videos: movieSelector(state).videos
    };
  }

};

export default connect(mapStateToProps, undefined)(Media);
