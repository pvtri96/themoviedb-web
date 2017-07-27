import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Form, FormGroup, Input } from 'reactstrap';
import Link from 'next/link';
import style from './header.scss';
import { menuActions } from '../redux/menu';
import { connect } from 'react-redux';
import Router from 'next/router';
import { movieListActionTypes } from '../redux/movies/list';
import { tvshowsActionsTypes } from '../redux/tvshows/list';
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
    let menu = {
      movies: "movies",
      tvshows: "tv-show"
    };
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
                    <Link  href="/"><NavLink>Discover</NavLink></Link>
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
                    <div onClick={() =>{
                      this.props.fetchMenu(menu.movies);
                      Router.push('/movies');
                    }}>
                      <NavLink>Movies</NavLink>
                    </div>
                    <ul className="dropdown-content">
                      <div onClick={() =>{
                        this.props.fetchMenu(menu.movies);
                        this.props.fetchSubMenu(movieListActionTypes.POPULAR);
                        Router.push('/movies');
                      }}>
                        <NavLink>Popular</NavLink>
                      </div>
                      <div onClick={() =>{
                        this.props.fetchMenu(menu.movies);
                        this.props.fetchSubMenu(movieListActionTypes.TOP_RATED);
                        Router.push('/movies/top-rated');
                      }}>
                        <NavLink>Top Rated</NavLink>
                      </div>
                      <div onClick={() =>{
                        this.props.fetchMenu(menu.movies);
                        this.props.fetchSubMenu(movieListActionTypes.UPCOMING);
                        Router.push('/movies/upcoming');
                      }}>
                        <NavLink>Upcoming</NavLink>
                      </div>
                      <div onClick={() =>{
                        this.props.fetchMenu(menu.movies);
                        this.props.fetchSubMenu(movieListActionTypes.NOW_PLAYING);
                        Router.push('/movies/now-playing');
                      }}>
                        <NavLink>Now Playing</NavLink>
                      </div>
                    </ul>
                  </li>
                </ul>
              </NavItem>
              <NavItem>
                <ul className="dropdown">
                  <li className="dropdown-list">
                    <div onClick={() =>{
                      this.props.fetchMenu(menu.tvshows);
                      Router.push('/tv-shows');
                    }}>
                      <NavLink>TV Shows</NavLink>
                    </div>
                    <ul className="dropdown-content">
                      <div onClick={() =>{
                        this.props.fetchMenu(menu.tvshows);
                        this.props.fetchSubMenu(tvshowsActionsTypes.POPULAR);
                        Router.push('/tv-shows');
                      }}>
                        <NavLink>Popular</NavLink>
                      </div>
                      <div onClick={() =>{
                        this.props.fetchMenu(menu.tvshows);
                        this.props.fetchSubMenu(tvshowsActionsTypes.TOP_RATED);
                        Router.push('/tv-shows/top-rated');
                      }}>
                        <NavLink>Top Rated</NavLink>
                      </div>
                      <div onClick={() =>{
                        this.props.fetchMenu(menu.tvshows);
                        this.props.fetchSubMenu(tvshowsActionsTypes.ON_THE_AIR);
                        Router.push('/tv-shows/on-the-air');
                      }}>
                        <NavLink>On TV</NavLink>
                      </div>
                      <div onClick={() =>{
                        this.props.fetchMenu(menu.tvshows);
                        this.props.fetchSubMenu(tvshowsActionsTypes.AIRING_TODAY);
                        Router.push('/tv-shows/airing-today');
                      }}>
                        <NavLink>Airing Today</NavLink>
                      </div>
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


const mapDispatchToProps = (dispatch) => {
  return {
    fetchMenu: (menu) => {
      dispatch(menuActions.fetchMenu(menu));
    },
    fetchSubMenu: (submenu) => {
      dispatch(menuActions.fetchSubMenu(submenu));
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Header);

// <NavItem>
//                 <ul className="dropdown">
//                   <li className="dropdown-list">
//                     <Link href="/"><NavLink>People</NavLink></Link>
//                     <ul className="dropdown-conctent">
//                       <li><Link href="/"><NavLink>Popular People</NavLink></Link></li>
//                     </ul>
//                   </li>
//                 </ul>
//               </NavItem>
