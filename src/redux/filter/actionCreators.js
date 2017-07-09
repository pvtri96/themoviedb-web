import actionTypes from './actionTypes';

export const updateViewFilter = ( types ) => {
  return {
    type: actionTypes.UPDATE_VIEW_FILTER,
    payload: types
  };
};

export default {
  updateViewFilter
};
