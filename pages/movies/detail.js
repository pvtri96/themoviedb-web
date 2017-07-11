
import React ,{ Component }from 'react';
import MovieDetail from '../../src/components/detail';
import Master from '../../src/containers/Master';
import withRedux from 'next-redux-wrapper';
import { getStore } from '../../src/redux';
import { movieActions } from '../../src/redux/movies/detail';
import PropTypes from 'prop-types';
import Loading from '../../src/components/Loading';

class Index extends Component {

  static async getInitialProps({  store, query }) {

    await store.dispatch(movieActions.fetchMovieDetail((query.id)));
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    window.scrollTo(0,0);
    setTimeout(() => this.setState({ isLoading: false }), 500);

    this.props.fetchCredits(this.props.url.query.id);
    this.props.fetchReviews(this.props.url.query.id);
    this.props.fetchReleaseDates(this.props.url.query.id);
    this.props.fetchRecommendations(this.props.url.query.id);
    this.props.fetchKeywords(this.props.url.query.id);
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

