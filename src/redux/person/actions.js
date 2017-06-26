import axios from 'axios';
import {
  personFetchRequested,
  personFetchFulfilled,
  personFetchRejected
} from './actionCreators';
//`https://api.themoviedb.org/3/person/${pid}?api_key=14240ace62bcafe15227f35ad9cd8580`
//https://api.themoviedb.org/3/person/90633/tagged_images?api_key=14240ace62bcafe15227f35ad9cd8580&language=en-US&page=1
export const fetchPerson =(id) =>async (dispatch)=>{
  dispatch(personFetchRequested());
  try {
    const person = await axios.get(process.env.GET_DETAIL_PERSON + id + "?api_key=" + process.env.API_KEY)
      .then(response => response.data);
    const know_for = await axios.get(process.env.GET_DETAIL_PERSON + id + "/movie_credits?api_key=" + process.env.API_KEY)
      .then(response => response.data);
    const externalIds = await axios.get(process.env.GET_DETAIL_PERSON + id + "/external_ids?api_key=" + process.env.API_KEY)
      .then(response => response.data);
    const tagged_images = await axios.get('https://api.themoviedb.org/3/person/' + id + '/tagged_images?api_key=14240ace62bcafe15227f35ad9cd8580&language=en-US&page=1')
      .then(response => response.data);
    dispatch(personFetchFulfilled(person, know_for, externalIds, tagged_images));
  }
  catch (err){
    return dispatch(personFetchRejected(err));
  }
};

export default {
  fetchPerson
};
