import actionTypes from './actionTypes';

const Reducer = (state = actionTypes.INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.MOVIES_FETCH :
      return {
        ...state,
        fetchStatus : `Data fetching ... ${(new Date()).toLocaleDateString()}`
      };

    case actionTypes.MOVIES_FETCH_FULLFILLED :
      return {
        ...state,
        movies: action.payload,
        fetchStatus : 'Data fetched success !'
      };

    case actionTypes.MOVIES_FETCH_CANCEL :
      return {
        ...state,
        fetchStatus: 'Data Fetching cancelled !'
      };

    case actionTypes.MOVIES_FETCH_REJECTED :
      return {
        ...state,
        fetchStatus: `Error: ${action.payload}`
      };
    default :
      return state;
  }
}

export default Reducer;
