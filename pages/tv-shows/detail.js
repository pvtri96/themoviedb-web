
import React ,{ Component }from 'react';
import TvShowDetail from '../../src/components/detail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { tvshowActions } from '../../src/redux/tvshows/detail';
import PropTypes from 'prop-types';
import Loading from '../../src/components/Loading';
import { menuActions } from '../../src/redux/menu';
import { tvshowSelector} from '../../src/redux/tvshows/detail';
import Services from '../../src/service';

class Index extends Component {

  static async getInitialProps({  store, query }) {
    store.dispatch(menuActions.fetchMenu("tvshows"));
    await store.dispatch(tvshowActions.fetchTvshowDetail((query.id)));
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.id = this.props.url.query.id;
    this.detail = this.props.detail;
    this.season_num;
    if(this.detail)
      this.season_num = Services.getLastSeasonNumber(this.detail.seasons);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    setTimeout(() => this.setState({ isLoading: false }), 1000);
    this.props.fetchCredits(this.id);
    this.props.fetchKeywords(this.id);
    this.props.fetchImages(this.id);
    this.props.fetchVideos(this.id);
    this.props.fetchRecommendations(this.id);
    this.props.fetchSeason(this.id, this.season_num);
  }

  render(){
    if(this.state.isLoading) {
      return (
        <Master>
          <Loading />
        </Master>
      );
    }
    return (
      <Master>
        <TvShowDetail />
      </Master>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail: tvshowSelector(state).detail
  };
}

// tvshow not support get reviews
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTvshowDetail : (id) => dispatch(tvshowActions.fetchTvshowDetail(id)),
    fetchCredits : (id) => dispatch(tvshowActions.fetchCredits(id)),
    fetchRecommendations : (id) => dispatch(tvshowActions.fetchRecommendations(id)),
    fetchImages : (id) => dispatch(tvshowActions.fetchImages(id)),
    fetchVideos : (id) => dispatch(tvshowActions.fetchVideos(id)),
    fetchKeywords : (id) => dispatch(tvshowActions.fetchKeywords(id)),
    fetchSeason : (id, season_num) => dispatch(tvshowActions.fetchSeason(id, season_num)),
  };
};

Index.propTypes = {
  fetchMovieDetailReload: PropTypes.func,
  url: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default withRedux(getStore, mapStateToProps, mapDispatchToProps)(Index);

