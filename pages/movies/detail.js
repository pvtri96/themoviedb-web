
import React ,{ Component }from 'react';
import MovieDetail from '../../src/components/detail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieActions } from '../../src/redux/movies/detail';
import PropTypes from 'prop-types';
import Loading from '../../src/components/Loading';
import { menuActions } from '../../src/redux/menu';


class Index extends Component {

  static async getInitialProps({ isServer, store, query }) {
    store.dispatch(menuActions.fetchMenu("movies"));
    if(isServer)
      await store.dispatch(movieActions.fetchMovieDetail((query.id)));
    return { isServer };
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.id = this.props.url.query.id;
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
        <MovieDetail isServer={this.props.isServer} />
      </Master>
    );
  }

  componentDidMount() {

    window.scrollTo(0,0);
    setTimeout(() => this.setState({ isLoading: false }), 1000);

    this.props.fetchDetail(this.id);
    this.props.fetchCredits(this.id);
    this.props.fetchReviews(this.id);
    this.props.fetchReleaseDates(this.id);
    this.props.fetchKeywords(this.id);
    this.props.fetchImages(this.id);
    this.props.fetchVideos(this.id);
    this.props.fetchRecommendations(this.id);
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {};
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetail : (id) => dispatch(movieActions.fetchMovieDetail(id)),
    fetchCredits : (id) => dispatch(movieActions.fetchMovieCredits(id)),
    fetchRecommendations : (id) => dispatch(movieActions.fetchMovieRecommendations(id)),
    fetchReviews : (id) => dispatch(movieActions.fetchMovieReviews(id)),
    fetchReleaseDates : (id) => dispatch(movieActions.fetchMovieReleaseDates(id)),
    fetchImages : (id) => dispatch(movieActions.fetchMovieImages(id)),
    fetchVideos : (id) => dispatch(movieActions.fetchMovieVideos(id)),
    fetchKeywords : (id) => dispatch(movieActions.fetchMovieKeywords(id)),
  };
};

Index.propTypes = {
  fetchDetailReload: PropTypes.func,
  url: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default withRedux(getStore, mapStateToProps, mapDispatchToProps)(Index);

