import actionTypes from './actionTypes';

export const INITIAL_STATE = {
  menuTitle: '',
  fetchStatus :''
};

export const KEY = 'menu';

export const selector = (state) => state[KEY];

//menu
const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {

  case actionTypes.MENU_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MENU_FETCH_FULLFILLED :
    return {
      ...state,
      menuTitle: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.MENU_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };
  case actionTypes.SUB_MENU_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.SUB_MENU_FETCH_FULLFILLED :
    return {
      ...state,
      submenu: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.SUB_MENU_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };
  default :
    return state;
  }
};


export default Reducer;
