import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import stylesheet from '../../People.scss';
import { personSelector } from '../../../../redux/people/person';
import PeopleServices from '../../../../services/people/PeopleServices';
import RenderCrew from './TableShow';

const renderCast = (array, valueSort) => {
  let result;
  let resultChangeNullDate = PeopleServices.changeNullDate(array);
  let resultSortByKey = PeopleServices.sortByKey(resultChangeNullDate,valueSort);
  result = resultSortByKey.reverse();
  return result;
};

class Movies extends Component {
  constructor(props){
    super(props);
  }

  renderCrew(array){
    return <RenderCrew array={array}/>;
  }
  render(){
    //get list Movies , sort by year
    let know_for = this.props.know_for;
    let know_sort_cast = renderCast(know_for.cast, "release_date" );
    //console.log("array----"+know_sort_cast);

    //split array
    let product = PeopleServices.splitArray(know_for.crew, "Production");
    //let list = product.filter((x,i,a) => a.job.indexOf(x) ==i);
    //console.log(list);
    let productSort = renderCast(product, "release_date" );
    let direct = PeopleServices.splitArray(know_for.crew, "Directing");
    let write = PeopleServices.splitArray(know_for.crew, "Writing");
    let crew = PeopleServices.splitArray(know_for.crew, "Crew");
    //render each array of department
    let productRender = this.renderCrew(productSort);
    let directingRender = this.renderCrew(direct);
    let writingRender = this.renderCrew(write);
    let crewRender = this.renderCrew(crew);
    let know_for_cast = this.renderCrew(know_sort_cast);
    return (
      <div className="per_movies">
        <style dangerouslySetInnerHTML = {{ __html: stylesheet }} />
        {know_for_cast}
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
