import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { BackdropCard, PosterCard } from '../listViews';
import { movieListSelector, movieListActions, movieListActionTypes } from '../../redux/movies/list';
import { filterConstant, filterSelector } from '../../redux/filter';
import { menuSelector } from '../../redux/menu';
import Filter from '../listViews/filter/Filter';
// import { tvshowsActionsTypes } from '../../redux/tvshows/list';
class Index extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    switch (this.props.subMenu) {
    case movieListActionTypes.TOP_RATED: {
      this.props.fetchMovieTopRated();
      break;
    }
    case movieListActionTypes.UPCOMING: {
      this.props.fetchMovieUpComing();
      break;
    }
    case movieListActionTypes.NOW_PLAYING: {
      this.props.fetchMovieNowPlaying();
      break;
    }
    default: this.props.fetchMoviePopular();
    }
  }

  renderItemView (data) {
    switch (this.props.filter){
    case filterConstant.BACKDROP_CARD:
      return <BackdropCard data = {data} key = {data.id}/>;
    case filterConstant.POSTER_CARD:
      return <PosterCard data = {data} key = {data.id}/>;
    }
  }

  render() {
    console.log(this.props.filter);
    return (
      <div className="container">
        <Filter/>
        <div className="list d-flex">
          {this.props.datas.map( data => {
            return this.renderItemView( data );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  datas: movieListSelector(state).list,
  filter: filterSelector(state).viewType,
  subMenu: menuSelector(state).subMenu,
  genres: movieListSelector(state).genres
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMoviePopular: () => {
      dispatch(movieListActions.fetchMoviePopular());
    },
    fetchMovieTopRated: () => {
      dispatch(movieListActions.fetchMovieTopRated());
    },
    fetchMovieUpComing: () => {
      dispatch(movieListActions.fetchMovieUpComing());
    },
    fetchMovieNowPlaying: () => {
      dispatch(movieListActions.fetchMovieNowPlaying());
    }
  };
};

export default connect( mapStateToProps , mapDispatchToProps )( Index );
