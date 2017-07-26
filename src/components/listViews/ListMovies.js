import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { BackdropCard, PosterCard } from '../listViews';
import { movieListSelector } from '../../redux/movies/list';
import { filterConstant, filterSelector } from '../../redux/filter';
import { movieListActions } from '../../redux/movies/list';
import Filter from '../listViews/filter/Filter';
// import { tvshowsActionsTypes } from '../../redux/tvshows/list';
class Index extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    let movie = this.props.movie;
    this.props.fetchCurrentMovie(movie);
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
  filter: filterSelector(state).viewType
});

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchTVshowPopular: () => {
    //   dispatch(tvshowsActions.fetchTVshowPopular());
    // },
    // fetchTVshowTopRated: () => {
    //   dispatch(tvshowsActions.fetchTVshowTopRated());
    // },
    // fetchTVshowOnTheAir: () => {
    //   dispatch(tvshowsActions.fetchTVshowOnTheAir());
    // }
    fetchCurrentMovie: (movie) => {
      dispatch(movieListActions.fetchCurrentMovie(movie));
    }
  };
};

export default connect( mapStateToProps , mapDispatchToProps )( Index );
