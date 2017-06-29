import actionTypes from './actionTypes';
import Constant from './constant';

export const KEY = 'filter';

export const INITIAL_STATE = {
  viewType: Constant.POSTER_CARD
};

export const selector = (state) => state[KEY];
export default (state = INITIAL_STATE, action ) => {
  switch(action.type) {
  case actionTypes.UPDATE_VIEW_FILTER:
    return {
      ...state,
      viewType: action.payload
    };
  default:
    return state;
  }
};
