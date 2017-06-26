import React,{ Component } from 'react';
import { connect } from 'react-redux';
import TVShows from './TVShows';
import { tvshowsActions, tvshowsSelector } from '../../redux/tvshows';

class ListMovies extends Component {
  constructor(props){
    super(props);
    this.fetchTvShows =  this.fetchTvShows.bind(this);
  }

  componentDidMount() {
    this.fetchTvShows();
  }

  fetchTvShows () {
    this.props.fetchTvShows();
  }

  render() {
    return (
      <div className="list container d-flex">
        {this.props.tvshows.map( tvshow => (
          <TVShows tvshow = {tvshow} key = {tvshow.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProp = state => ({
  tvshows: tvshowsSelector(state).list
});

const dispatchStateToProps = (dispatch) => {
  return {
    fetchTvShows: () => {
      dispatch(tvshowsActions.fetchTvShows());
    }
  };
};

export default connect( mapStateToProp , dispatchStateToProps )( ListMovies );
