
import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
      <footer>
        <span className="spam">THIS IS FOOTER</span>
      </footer>
    );
  }
}

export default Footer;
