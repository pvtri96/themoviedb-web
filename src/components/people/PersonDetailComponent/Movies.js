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

  renderCrew(array){
    let renderCrew;
    if(array.length != 0){
      renderCrew =(
        <Row className="per_movies_content">
          <div>
            <h5>{array[0].department}</h5>
            {array.map(item => (
              <div key={item.credit_id}>
                <Table className="tb_movies" >
                  <tbody>
                    <tr >
                      <th scope = "row" className = "tb_year">{PeopleServices.reduceYear(String(item.release_date), 1)}</th>
                      <td className = "tb_view" ><FontAwesome name = 'dot-circle-o' /></td>
                      <td className = "tb_movie"><b>{item.title}</b>... <i>{item.job}</i></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )) }
          </div>
        </Row>
      );
      return renderCrew;
    }
    else return renderCrew = (<div></div>);
  }
  render(){
    //get list Movies , sort by year
    let know_for = this.props.know_for;
    let know_sort_cast_des = PeopleServices.sortByKey(know_for.cast,"release_date");
    let know_sort_cast = know_sort_cast_des.reverse();

    //split array
    let product = PeopleServices.splitArray(know_for.crew, "Production");
    let direct = PeopleServices.splitArray(know_for.crew, "Directing");
    let write = PeopleServices.splitArray(know_for.crew, "Writing");
    let crew = PeopleServices.splitArray(know_for.crew, "Crew");
    //render each array of department
    let productRender = this.renderCrew(product);
    let directingRender = this.renderCrew(direct);
    let writingRender = this.renderCrew(write);
    let crewRender = this.renderCrew(crew);

    return (
      <div className="per_movies">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        <Row className="per_movies_content">
          {know_sort_cast.map(item => (
            <Table className="tb_movies" key={item.credit_id}>
              <tbody>
                <tr >
                  <th scope = "row" className = "tb_year">{PeopleServices.reduceYear(String(item.release_date), 1)}</th>
                  <td className = "tb_view" ><FontAwesome name = 'dot-circle-o' /></td>
                  <td className = "tb_movie"><b>{item.title}</b> as <i>{item.character}</i></td>
                </tr>
              </tbody>
            </Table>
          )) }
        </Row>
        {productRender}
        {directingRender}
        {writingRender}
        {crewRender}
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
