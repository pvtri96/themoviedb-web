import actionTypes from './actionTypes';

//menu
export const menuFetchRequested = () => ({
  type: actionTypes.MENU_FETCH_REQUESTED
});

export const menuFetchFullfilled = (menu) => ({
  type: actionTypes.MENU_FETCH_FULLFILLED,
  payload: menu,
});

export const menuFetchRejected = (err) => ({
  type: actionTypes.MENU_FETCH_REJECTED,
  payload: err,
  error: true
});

//sub-menu
export const subMenuFetchRequested = () => ({
  type: actionTypes.SUB_MENU_FETCH_REQUESTED
});

export const subMenuFetchFullfilled = (submenu) => ({
  type: actionTypes.SUB_MENU_FETCH_FULLFILLED,
  payload: submenu,
});

export const subMenuFetchRejected = (err) => ({
  type: actionTypes.SUB_MENU_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  menuFetchRequested,
  menuFetchFullfilled,
  menuFetchRejected,

  subMenuFetchRequested,
  subMenuFetchFullfilled,
  subMenuFetchRejected
};


