import axios from 'axios';
import actionCreators from './actionCreators';

export const fetchMovies = (sort_by = "popularity.desc",primary_release_year="",with_keywords="") => async (dispatch) => {
  dispatch(actionCreators.moviesFetchRequested());
  //console.log("fetch"+ with_keywords);
  try{
    console.log(process.env.DISCOVER_MOVIES_URL+'api_key='+process.env.API_KEY+'&language=en-US&sort_by='+sort_by+'&include_adult=false&include_video=false&page=1'+'&with_keywords='+with_keywords+'&primary_release_year='+primary_release_year);
    const movies = await axios.get(process.env.DISCOVER_MOVIES_URL+'api_key='+process.env.API_KEY+'&language=en-US&sort_by='+sort_by+'&include_adult=false&include_video=false&page=1'+'&with_keywords='+with_keywords+'&primary_release_year='+primary_release_year)
    // const movies = await axios.get(process.env.DISCOVER_MOVIES_URL,{
    //   params : {
    //     api_key: process.env.API_KEY,
    //     language: 'en-US',
    //     sort_by: sort_by,
    //     include_adult: false,
    //     include_video: false,
    //     page: 1,
    //     year: year,
    //     with_keywords: with_keywords
    //   }
    // })
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
