import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MovieDetailActionCreators} from '../../redux/discover/movieDetail';

const picture= "https://image.tmdb.org/t/p/w500/";
class MovieDetail extends Component{
  constructor(props){
    super(props);
    this.getDetail = this.getDetail.bind(this);
  }
  componentDidMount(){
    this.getDetail(this.props.id);
  }
  getDetail(id){
    this.props.getDetail(id);
  }
  render(){
    let detail = this.props.movieDetail;
    console.log(this.props);
    return (
      <div>
        {detail.title}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    movieDetail: state.movieDetail.detail
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    getDetail: (id) => {
      dispatch(MovieDetailActionCreators.movieDetailFetch(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (MovieDetail);
