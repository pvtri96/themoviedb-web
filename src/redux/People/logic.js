import axios from 'axios';
import {
  peopleFetchRequested,
  peopleFetchFulfilled,
  peopleFetchRejected
} from './actionCreators';

export const fetchPeople=()=> async (dispatch)=>{
  dispatch(peopleFetchRequested());
  try {
    const people = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=14240ace62bcafe15227f35ad9cd8580&language=en-US&page=1`)
      .then(response => response.data.results);
    return dispatch(peopleFetchFulfilled(people));
  }
  catch(err) {
    return dispatch(peopleFetchRejected(err));
  }
};

export default {
  fetchPeople
};

