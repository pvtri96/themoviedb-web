import actionTypes from './actionTypes';

const Reducer = (state = actionTypes.INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.MOVIES_FETCH :
      return {
        ...state,
        fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
      };

    case actionTypes.MOVIES_FETCH_FULLFILLED :
      return {
        ...state,
        list: action.payload,
        fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
      };

    case actionTypes.MOVIES_FETCH_CANCEL :
      return {
        ...state,
        fetchStatus: 'Data Fetching cancelled !'
      };

    case actionTypes.MOVIES_FETCH_REJECTED :
      return {
        ...state,
        fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
      };
    default :
      return state;
  }
}

export default Reducer;
