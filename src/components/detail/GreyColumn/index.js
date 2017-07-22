import React , {Component }from 'react';
import Fontawesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { movieSelector } from '../../../redux/movies/detail';
import moviesService from '../../../service';

const getTypeReleaseDates = i => {
  switch(i) {
  case 1: return "Premiere";
  case 2: return "Theatrical (limited) ";
  case 3: return "Theatrical";
  case 4: return "Digital";
  case 5: return "Physical";
  case 6: return "TV";
  }
};

const getOriginalLanguage = (code, arr) => {
  let result = "";
  arr.map(temp => {
    if(temp.iso_639_1 == code)
    {
      result = temp.name;
    }
  });
  return result;
};

const limitLengthTextHomepage = 40;

class Index extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    let detail = this.props.detail;
    let releaseDates = this.props.releaseDates;
    let keywords = this.props.keywords;
    console.log("Grey column");
    console.log(detail);
    if(!detail|| Object.getOwnPropertyNames(detail).length == 0 || !releaseDates || !keywords )
      return (<div></div>);

    return (
      <div className="grey_column">
        <div className="d-flex ">
          <span className="icon_item">
            <Fontawesome
              name="facebook-square"
              size="2x"
            />
          </span>

          <span className="icon_item">
            <Fontawesome
              name="twitter-square"
              size="2x"
            />
          </span>

          <span className="icon_item">
            <Fontawesome
              name="camera-retro"
              size="2x"
            />
          </span>

        </div> {/* icon */}

        <div className="title">Facts</div>

        <div className="title">Status</div>
        <div className="content">{detail.status}</div>
        {/* Status */}

        <div className="title">Release Information</div>
        <div className="content">
          {releaseDates.map((temp,index) => (
            <div key={index} className="d-flex">
              <img src={process.env.FLAT_IMAGE_US_URL} alt="US"/>
              <span>
                {new Date(temp.release_date).toDateString()},{' '}
                {temp.certification}, {getTypeReleaseDates(temp.type)}
              </span>
            </div>
          ))}
        </div>
        {/* Release Information */}

        <div className="title">Original Language</div>
        <div className="content">
          {getOriginalLanguage(detail.original_language, detail.spoken_languages)}
        </div> {/* Original Language */}

        <div className="title">Runtime</div>
        <div className="content">
          {moviesService.setMinutesToHours(detail.runtime)}
        </div> {/* Runtime */}

        <div className="title">Budget </div>
        <div className="content">
          ${moviesService.setTextMoney(detail.budget) }
        </div> {/* Budget */}

        <div className="title">Revenue </div>
        <div className="content">
          {detail.revenue ?
            `$ ${moviesService.setTextMoney(detail.revenue)}`  :
            "-"
          }
        </div> {/* Revenue */}

        <div className="title">Homepage </div>
        <div className="content">
          {detail.homepage ?
            <a href={detail.homepage} target="_blank">
              {moviesService.reducerLengthText(detail.homepage, limitLengthTextHomepage)}
            </a> :
            "-"
          }
        </div> {/* Homepage */}

        <div className="title">Genres </div>
        <div className="content">
          {detail.genres.map(genre => (
            <div className="genre_item" key={genre.id}>
              {genre.name}
            </div>
          ))}
        </div> {/* Genres */}


        <div className="title">Keywords </div>
        <div className="content">
          {keywords.map(keyword => (
            <div className="keyword_item" key={keyword.id}>
              {keyword.name}
            </div>
          ))}
        </div> {/* Keywords */}

        <div className="title">
          <br />
          <hr />
        </div>



      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    detail: movieSelector(state).detail,
    releaseDates: movieSelector(state).releaseDates,
    keywords: movieSelector(state).keywords
  };
};

export default connect(mapStateToProps, undefined)(Index);
