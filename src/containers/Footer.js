
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
        <img src="../../static/image/footer.jpg" alt=""/>
      </footer>
    );
  }
}

export default Footer;
