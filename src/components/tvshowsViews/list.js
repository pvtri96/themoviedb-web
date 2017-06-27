import React,{ Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import TVShows from '../tvshowsViews/posterCard/listItem';
import { tvshowsActions, tvshowsSelector } from '../../redux/tvshows';


class ListMovies extends Component {
  constructor(props){
    super(props);
    this.fetchTvShows =  this.fetchTvShows.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  componentDidMount() {
    this.fetchTvShows();
  }

  fetchTvShows () {
    this.props.fetchTvShows();
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex bar">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              View
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Mixed Compact View</DropdownItem>
              <DropdownItem>Poster Card View</DropdownItem>
              <DropdownItem>Backdrop Card View</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="list d-flex">
          {this.props.tvshows.map( tvshow => (
            <TVShows tvshow = {tvshow} key = {tvshow.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => ({
  tvshows: tvshowsSelector(state).list
});

const dispatchStateToProps = (dispatch) => {
  return {
    fetchTvShows: () => {
      dispatch(tvshowsActions.fetchTvShows());
    }
  };
};

export default connect( mapStateToProp , dispatchStateToProps )( ListMovies );
