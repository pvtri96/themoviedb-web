import axios from 'axios';
import {
  peopleFetchRequested,
  peopleFetchFulfilled,
  peopleFetchRejected
} from './actionCreators';

export const fetchPeople=(page)=> async (dispatch)=>{
  dispatch(peopleFetchRequested());
  try {
    const people = await axios.get(process.env.PEOPLE_SITE +`?api_key=` + process.env.API_KEY + `&page=` + page)
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

