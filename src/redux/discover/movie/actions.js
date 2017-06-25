import axios from 'axios';
import actionCreators from './actionCreators';

export const fetchMovies = (sort_by = "popularity.desc",year="") => async (dispatch) => {
  dispatch(actionCreators.moviesFetchRequested());
  try{
    //const movies = await axios.get(process.env.DISCOVER_MOVIES_URL+process.env.API_KEY+'&language=en-US&sort_by='+sort_by+'&year='+year)
    console.log(process.env.DISCOVER_MOVIES_URL+'api_key='+process.env.API_KEY+'&language=en-US&sort_by='+sort_by+'&include_adult=false&include_video=false&page=1'+'&year='+year);
    const movies = await axios.get(process.env.DISCOVER_MOVIES_URL+'api_key='+process.env.API_KEY+'&language=en-US&sort_by='+sort_by+'&include_adult=false&include_video=false&page=1'+'&year='+year)
      .then(response => response.data.results);
    return dispatch(actionCreators.moviesFetchFulfilled(movies));
  }
  catch (err) {
    return dispatch(actionCreators.moviesFetchRejected(err));
  }
};

export default {
  fetchMovies
};
