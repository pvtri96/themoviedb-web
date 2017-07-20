import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { BackdropCard, PosterCard } from '../listViews';
import { tvshowsActions, tvshowsSelector } from '../../redux/tvshows/list';
import { filterConstant, filterSelector } from '../../redux/filter';
import Filter from '../listViews/filter/Filter';

class Index extends Component {
  constructor(props){
    super(props);
    this.fetchData =  this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData () {
    this.props.fetchData();
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
  datas: tvshowsSelector(state).list,
  filter: filterSelector(state).viewType
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(tvshowsActions.fetchTVshow());
    }
  };
};

export default connect( mapStateToProps , mapDispatchToProps )( Index );
