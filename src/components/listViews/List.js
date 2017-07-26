import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { BackdropCard, PosterCard } from '../listViews';
import { tvshowsActions, tvshowsSelector } from '../../redux/tvshows/list';
import { filterConstant, filterSelector } from '../../redux/filter';
import Filter from '../listViews/filter/Filter';
import { tvshowsActionsTypes } from '../../redux/tvshows/list';
import { menuSelector } from '../../redux/menu';
class Index extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    switch (this.props.subMenu) {
    case tvshowsActionsTypes.TOP_RATED: {
      this.props.fetchTVshowTopRated();
      break;
    }
    case tvshowsActionsTypes.ON_THE_AIR: {
      this.props.fetchTVshowOnTheAir();
      break;
    }
    case tvshowsActionsTypes.AIRING_TODAY: {
      this.props.fetchTVshowAiringToday();
      break;
    }
    default: this.props.fetchTVshowPopular();
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
  datas: tvshowsSelector(state).list,
  filter: filterSelector(state).viewType,
  subMenu: menuSelector(state).subMenu,
  genres: tvshowsSelector(state).genres
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTVshowPopular: () => {
      dispatch(tvshowsActions.fetchTVshowPopular());
    },
    fetchTVshowTopRated: () => {
      dispatch(tvshowsActions.fetchTVshowTopRated());
    },
    fetchTVshowOnTheAir: () => {
      dispatch(tvshowsActions.fetchTVshowOnTheAir());
    },
    fetchTVshowAiringToday: () => {
      dispatch(tvshowsActions.fetchTVshowAiringToday());
    }
  };
};

export default connect( mapStateToProps , mapDispatchToProps )( Index );
