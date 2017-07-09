import React from 'react';

import PeopleServices from '../../../../../services/people/PeopleServices';
import RenderCrew from './TableShow';

const renderCastTV = (array, valueSort) => {
  let result;
  let resultChangeNullDate = PeopleServices.changeNullDateTV(array);
  let resultSortByKey = PeopleServices.sortByKey(resultChangeNullDate,valueSort);
  result = resultSortByKey.reverse();
  return result;
};

const renderCrew = (array) => {
  return <RenderCrew array={array}/>;
};

const renderSubCrewTV = (array, valueSplit, valueSort) => {
  let subArray = PeopleServices.splitArray(array, valueSplit);
  let subArraySort =  renderCastTV(subArray, valueSort );
  let subArrayRender = renderCrew(subArraySort);
  return subArrayRender;
};

export default {
  renderCastTV,
  renderCrew,
  renderSubCrewTV,
};
