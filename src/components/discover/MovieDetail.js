import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieDetailSelector} from '../../redux/discover/movieDetail';
import { Button} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import stylesheet  from './MovieDetail.scss';

const picture= "https://image.tmdb.org/t/p/w500/";
class MovieDetail extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let detail = this.props.movieDetail;
    console.log(this.props);
    let path= picture+detail.poster_path;
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="detail">
          <img className="image" src={path} alt={detail.original_title} />
          <div className="information">
            <h2 className="title">
              {detail.title}
            </h2>
            <div className="secondRow">
              <div className="releaseDate">
                <FontAwesome name='calendar' className="calendar"/>
                {detail.release_date}
              </div>
              <div className="voteAverage">
                {detail.vote_average}
                <FontAwesome name='star' className="star"/>
              </div>
            </div>
            <div>
              {detail.overview}
            </div>
            <Button className="button" color="secondary">Back</Button>{' '}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    movieDetail: movieDetailSelector(state).detail
  };
};

export default connect(mapStateToProps,undefined) (MovieDetail);
