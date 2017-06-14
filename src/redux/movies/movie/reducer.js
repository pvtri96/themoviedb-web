import actionTypes from './actionTypes';


const Reducer = (state = actionTypes.INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.MOVIE_DETAIL_FETCH :
      return {
        ...state,
        fetchStatus: `Data fetch ${(new Date()).toLocaleDateString()}`
      };
    case actionTypes.MOVIE_DETAIL_FETCH_FULLFILLED :
      return {
        ...state,
        movie: action.payload
      }

    case actionTypes.MOVIE_DETAIL_FETCH_CANCEL :
      return {
        ...state,
        fetchStatus: 'Data fetch cancel !'
      }

    case actionTypes.MOVIE_DETAIL_FETCH_REJECTED :
      return {
        ...state,
        fetchStatus: `Error : ${action.payload}`
      }

    default :
      return state;
  }
}

export default Reducer;
