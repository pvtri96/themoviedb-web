import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import Link from 'next/link';
// import stylesheet from './movie/Main.scss';
//
/**
 * Simple example of Header using Reacstrap
 * More documents at https://reactstrap.github.io/
 */
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      popoverOpen: !this.state.popoverOpen
    });
  }

  render () {
    return (
      <div>
        <Navbar color="red" light toggleable inverse={true}>
          <NavbarToggler right onClick={this.toggle} />
          <Link href="/"><NavbarBrand className="logo">Reactstrap Navbar</NavbarBrand></Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="" navbar>
              <NavItem>
                <ul className="dropdown">
                  <li className="dropdown-list">
                    <Link className="dropdown-title" href="/"><NavLink>Discover</NavLink></Link>
                    <ul className="dropdown-content">
                      <li><Link href="/"><NavLink>Movies</NavLink></Link></li>
                      <li><Link href="/"><NavLink>TV Shows</NavLink></Link></li>
                    </ul>
                  </li>
                </ul>
              </NavItem>
              <NavItem>
                <ul className="dropdown">
                  <li className="dropdown-list">
                    <Link className="dropdown-title" href="/"><NavLink>Movies</NavLink></Link>
                    <ul className="dropdown-content">
                      <li><Link href="/"><NavLink>Popular</NavLink></Link></li>
                      <li><Link href="/"><NavLink>Top Rated</NavLink></Link></li>
                      <li><Link href="/"><NavLink>Up Coming</NavLink></Link></li>
                      <li><Link href="/"><NavLink>Now Playing</NavLink></Link></li>
                    </ul>
                  </li>
                </ul>
              </NavItem>
              <NavItem>
                <ul className="dropdown">
                  <li className="dropdown-list">
                    <Link className="dropdown-title" href="/"><NavLink>TV Shows</NavLink></Link>
                    <ul className="dropdown-content">
                      <li><Link href="/"><NavLink>Popular</NavLink></Link></li>
                      <li><Link href="/"><NavLink>Top Rated</NavLink></Link></li>
                      <li><Link href="/"><NavLink>On TV</NavLink></Link></li>
                      <li><Link href="/"><NavLink>Airing Today</NavLink></Link></li>
                    </ul>
                  </li>
                </ul>
              </NavItem>
              <NavItem>
                <ul className="dropdown">
                  <li className="dropdown-list">
                    <Link className="dropdown-title" href="/"><NavLink>People</NavLink></Link>
                    <ul className="dropdown-content">
                      <li><Link href="/"><NavLink>Popular People</NavLink></Link></li>
                    </ul>
                  </li>
                </ul>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

// <Button id="Popover1"  onClick={this.toggle}>
//                   Movie
//                 </Button>
//                 <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
//                   <PopoverContent><NavLink href="/" >asfs</NavLink></PopoverContent>
//                   <PopoverContent>Popular</PopoverContent>
//                 </Popover>
