import axios from 'axios';
import actionCreators from './actionCreators';

const searchUrl = "https://api.themoviedb.org/3/movie/";
export const fetchMovieDetail = (id) => async (dispatch) =>{
  dispatch(actionCreators.movieDetailFetchRequested);
  console.log(searchUrl+id+"?api_key=16e5e30b4fc471b65e708e2070c257d4&language=en-US");
  try{
    const movieDetail = await axios.get(searchUrl+id+"?api_key=16e5e30b4fc471b65e708e2070c257d4&language=en-US")
      .then(response => response.data);
    return dispatch(actionCreators.movieDetailFetchFulfilled(movieDetail));
  }
  catch(err){
    return dispatch(actionCreators.movieDetailFetchRejected(err));
  }
};

export default {
  fetchMovieDetail
};
