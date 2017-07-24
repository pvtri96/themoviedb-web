import actionCreators from './actionCreators';
//menu
export const fetchMenu = (menu) => (dispatch) => {
  dispatch(actionCreators.menuFetchRequested());
  try {
    return dispatch(actionCreators.menuFetchFullfilled(menu));
  } catch (error) {
    return dispatch(actionCreators.menuFetchRejected(error));
  }
};


//sub-menu
export const fetchSubMenu = (submenu) => (dispatch) => {
  dispatch(actionCreators.subMenuFetchRequested());
  try {
    return dispatch(actionCreators.subMenuFetchFullfilled(submenu));
  } catch (error) {
    return dispatch(actionCreators.subMenuFetchRejected(error));
  }
};

export default {
  fetchMenu,
  fetchSubMenu
};
