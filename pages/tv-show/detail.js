
import React ,{ Component }from 'react';
import TvShowDetail from '../../src/components/detail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieActions } from '../../src/redux/tvshows/detail';
import PropTypes from 'prop-types';
import Loading from '../../src/components/Loading';

class Index extends Component {

  static async getInitialProps({  store, query }) {

    await store.dispatch(movieActions.fetchTvShowDetail((query.id)));
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

    // this.props.fetchCredits(this.id);
    // this.props.fetchReviews(this.id);
    // this.props.fetchReleaseDates(this.id);
    // this.props.fetchKeywords(this.id);
    // this.props.fetchImages(this.id);
    // this.props.fetchVideos(this.id);
    // this.props.fetchRecommendations(this.id);
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
        <MovieDetail  />
      </Master>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {};
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetail : (id) => dispatch(movieActions.fetchMovieDetail(id)),
    fetchCredits : (id) => dispatch(movieActions.fetchCredits(id)),
    fetchRecommendations : (id) => dispatch(movieActions.fetchRecommendations(id)),
    fetchReviews : (id) => dispatch(movieActions.fetchReviews(id)),
    fetchReleaseDates : (id) => dispatch(movieActions.fetchReleaseDates(id)),
    fetchImages : (id) => dispatch(movieActions.fetchImages(id)),
    fetchVideos : (id) => dispatch(movieActions.fetchVideos(id)),
    fetchKeywords : (id) => dispatch(movieActions.fetchKeywords(id)),
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

