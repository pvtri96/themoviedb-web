import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { BackdropCard, PosterCard } from '../listViews';
import { tvshowsActions, tvshowsSelector } from '../../redux/tvshows';
import { filterConstant, filterSelector } from '../../redux/filter';
import Filter from './filter/Filter';

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

  renderItemView (tvshow) {
    switch (this.props.filter){
    case filterConstant.BACKDROP_CARD:
      return <BackdropCard tvshow = {tvshow} key = {tvshow.id}/>;
    case filterConstant.POSTER_CARD:
      return <PosterCard tvshow = {tvshow} key = {tvshow.id}/>;
    }
  }

  render() {
    console.log(this.props.filter);
    return (
      <div className="container">
        <Filter/>
        <div className="list d-flex">
          {this.props.tvshows.map( tvshow => {
            return this.renderItemView( tvshow );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tvshows: tvshowsSelector(state).list,
  filter: filterSelector(state).viewType
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTvShows: () => {
      dispatch(tvshowsActions.fetchTvShows());
    }
  };
};

export default connect( mapStateToProps , mapDispatchToProps )( ListMovies );
