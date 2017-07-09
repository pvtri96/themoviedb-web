import React from 'react';
import PeopleServices from '../../../../../services/people/PeopleServices';
import RenderCrew from './TableShow';

const renderCastMovies = (array, valueSort) => {
  let result;
  let resultChangeNullDate = PeopleServices.changeNullDateMovies(array);
  let resultSortByKey = PeopleServices.sortByKey(resultChangeNullDate,valueSort);
  result = resultSortByKey.reverse();
  return result;
};

const renderCrew = (array) => {
  return <RenderCrew array={array}/>;
};

const renderSubCrewMovie = (array, valueSplit, valueSort) => {
  let subArray = PeopleServices.splitArray(array, valueSplit);
  let subArraySort =  renderCastMovies(subArray, valueSort );
  let subArrayRender = renderCrew(subArraySort);
  return subArrayRender;
};

export default {
  renderCastMovies,
  renderCrew,
  renderSubCrewMovie,
};
