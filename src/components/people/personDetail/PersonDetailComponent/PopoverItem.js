import React, { Component } from 'react';
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class PopoverItem extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <span>
        <span id={'Popover-' + this.props.id} onClick={this.toggle}><FontAwesome name = 'dot-circle-o' /></span>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>
        </Popover>
      </span>
    );
  }
}
export default PopoverItem;
