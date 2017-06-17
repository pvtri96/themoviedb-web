import axios from 'axios';
import {
  personFetchRequested,
  personFetchFulfilled,
  personFetchRejected
} from './actionCreators';
//`https://api.themoviedb.org/3/person/${pid}?api_key=14240ace62bcafe15227f35ad9cd8580`

export const fetchPerson =(id) =>async (dispatch)=>{
  dispatch(personFetchRequested());
  try {
    const person = await axios.get(process.env.GET_DETAIL_PERSON + id + "?api_key=" + process.env.API_KEY)
      .then(response => response.data);
    dispatch(personFetchFulfilled(person));
  }
  catch (err){
    return dispatch(personFetchRejected(err));
  }
};

export default {
  fetchPerson
};
