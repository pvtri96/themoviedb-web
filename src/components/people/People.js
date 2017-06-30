import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CardDeck} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import Person from './Person';
import stylesheet from './People.scss';
import { peopleActions, peopleSelector } from '../../redux/people';

let page = 1;
class PeopleShowing extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.listPeople);
    return (
      <div  >
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <br />
        <h3>Popular people</h3><br />
        <CardDeck>
          {this.props.listPeople.map(item =>
            <Person person = {item} key = {item.id} />
          )}
        </CardDeck>
        <div className = "pagination">
          <p className = "left">
            Currently on page: {page} of 972
          </p>
          <span className = "right">
            <a onClick = {() => this.props.previousClick( --page )}>
              <FontAwesome name='arrow-circle-left' /></a>
            <a onClick = {() => this.props.nextClick( ++page )}>
              <FontAwesome name='arrow-circle-right' /></a>{'  '}
          </span>
        </div>
      </div>
    );
  }
}
PeopleShowing.propTypes = {
  fetchPeople: PropTypes.func,
  listPeople: PropTypes.array
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    listPeople: peopleSelector(state).listPeople
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPeople: () => {
      dispatch(peopleActions.fetchPeople(1));
    },
    nextClick: (page) => {
      dispatch(peopleActions.fetchPeople(page));
    },
    previousClick: (page) => {
      dispatch(peopleActions.fetchPeople(page));
    }
  };
};

const peopleConnect = connect(mapStateToProps, mapDispatchToProps)(PeopleShowing);

export default peopleConnect;
