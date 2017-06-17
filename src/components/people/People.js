import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, CardDeck,} from 'reactstrap';
import Person from './Person';
import stylesheet from './People.scss';
import { peopleActions, peopleSelector } from '../../redux/people';

class PeopleShowing extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.listPeople);
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <h3>Popular people</h3>
        <Row>
          <CardDeck>
            {this.props.listPeople.map(item =>
              <Person person={item} key={item.id} />
            )}
          </CardDeck>
        </Row>
        <Row>
          <div className="pagination">
            <p className="left">
              Currently on page:
            </p>
            <p className="right">
            </p>
          </div>
        </Row>
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
      dispatch(peopleActions.fetchPeople());
    }
  };
};

const peopleConnect = connect(mapStateToProps, mapDispatchToProps)(PeopleShowing);

export default peopleConnect;
