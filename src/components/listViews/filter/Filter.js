import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { filterActionCreators, filterConstant} from '../../../redux/filter';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.updateFilter = this.updateFilter.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  updateFilter ( filterName ) {
    this.props.updateFilter(filterName);
  }

  render() {
    return (
      <div className="d-flex bar">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            View
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem onClick={ () => this.updateFilter(filterConstant.MIXED_COMPACT)}>Mixed Compact View</DropdownItem>
            <DropdownItem onClick={ () => this.updateFilter(filterConstant.POSTER_CARD)}>Poster Card View</DropdownItem>
            <DropdownItem onClick={ () => this.updateFilter(filterConstant.BACKDROP_CARD)}>Backdrop Card View</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: ( type ) => {
      dispatch(filterActionCreators.updateViewFilter( type ));
    }
  };
};

export default connect ( undefined, mapDispatchToProps )( Filter );
