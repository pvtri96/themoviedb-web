import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { DetailsActionCreators } from '../../redux/details';

class Details extends Component {
  constructor(props){
    super(props);
    this.fetchDetails = this.fetchDetails.bind(this);
  }

  componentDidMount() {
    this.fetchDetails(this.props.id);
  }

  fetchDetails () {
    this.props.fetchDetails(this.props.id);
  }

  render() {
    let movieDetails = this.props.movieDetails;
    return (
      <div>
        { movieDetails.title }
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  console.log(state);
  return {
    movieDetails: state.movieDetails.detail
  }
}

const dispatchStateToProps = (dispatch) => {
  return {
    fetchDetails: (id) => {
      dispatch(DetailsActionCreators.detailFetch(id));
    }
  };
};

export default connect ( mapStateToProp, dispatchStateToProps )( Details );
