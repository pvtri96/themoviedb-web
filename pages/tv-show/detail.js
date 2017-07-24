
import React ,{ Component }from 'react';
import TvShowDetail from '../../src/components/detail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { tvshowActions } from '../../src/redux/tvshows/detail';
import PropTypes from 'prop-types';
import Loading from '../../src/components/Loading';

class Index extends Component {

  static async getInitialProps({  store, query }) {

    await store.dispatch(tvshowActions.fetchTvshowDetail((query.id)));
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.id = this.props.url.query.id;
  }

  componentDidMount() {
    window.scrollTo(0,0);
    setTimeout(() => this.setState({ isLoading: false }), 1000);
    this.props.fetchCredits(this.id);
    this.props.fetchKeywords(this.id);
    this.props.fetchImages(this.id);
    this.props.fetchVideos(this.id);
    this.props.fetchRecommendations(this.id);
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

const mapStateToProps = state => {
  console.log("detail tvshow");
  console.log(state);
  return {};
};

// tvshow not support get reviews
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTvshowDetail : (id) => dispatch(tvshowActions.fetchTvshowDetail(id)),
    fetchCredits : (id) => dispatch(tvshowActions.fetchCredits(id)),
    fetchRecommendations : (id) => dispatch(tvshowActions.fetchRecommendations(id)),
    fetchImages : (id) => dispatch(tvshowActions.fetchImages(id)),
    fetchVideos : (id) => dispatch(tvshowActions.fetchVideos(id)),
    fetchKeywords : (id) => dispatch(tvshowActions.fetchKeywords(id)),
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

