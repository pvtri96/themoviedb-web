import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Form, FormGroup, Input } from 'reactstrap';
import Link from 'next/link';
import style from './header.scss';
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
      <div className="header fixed-top">
        <style dangerouslySetInnerHTML={{ __html: style }} />
        <Navbar className="navigation container" color="red" light toggleable inverse={true}>
          <NavbarToggler right onClick={this.toggle} />
          <Link href="/"><NavbarBrand className="logo"><img src="../../static/image/themoviedb-logo.png"></img></NavbarBrand></Link>
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
                    <Link className="dropdown-title" href="/movies"><NavLink>Movies</NavLink></Link>
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
        <Form>
          <FormGroup className="search-bar">
            <div className="search d-flex">
              <i className="fa fa-search d-flex" aria-hidden="true"></i>
              <Input className="search-box" type="seach" name="seach" id="search" placeholder="Search for movie, tv show, person..."></Input>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Header;
