import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import stylesheet from '../../people/People.scss';
import { personSelector } from '../../../redux/person';
import PeopleServices from '../../../../services/PeopleServices';

class Movies extends Component {
  constructor(props){
    super(props);
  }
  //javascript function: sort array by year
  sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
  render(){
    let know_for = this.props.know_for;
    let know_sort_des = this.sortByKey(know_for.cast,"release_date");
    let know_sort_inc = know_sort_des.reverse();
    return (
      <div className="per_movies">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        <Row className="per_movies_content">
          {know_sort_inc.map(item => (
            <Table className="tb_movies" key={item.id}>
              <tbody>
                <tr >
                  <th scope = "row" className = "tb_year">{PeopleServices.reduceYear(String(item.release_date), 1)}</th>
                  <td className = "tb_view" ><FontAwesome name = 'dot-circle-o' /></td>
                  <td className = "tb_movie"><b>{item.title}</b> as <b>{item.character}</b></td>
                </tr>
              </tbody>
            </Table>
          )) }
        </Row>
      </div>
    );
  }
}

Movies.propTypes = {
  know_for: PropTypes.object,

};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    know_for: personSelector(state).know_for,
  };
};

const MoviesConnect = connect(mapStateToProps, undefined)(Movies);

export default MoviesConnect;
