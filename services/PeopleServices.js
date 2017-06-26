import axios from 'axios';

const apiSite = process.env.API_SITE;
const apiKey = process.env.API_KEY;

const MAX_LENGTH = 100;

class PeopleService {

  static reduceText (text) {
    let words = text.split(" ");
    let parts = [];
    for(let i=0; i<words.length; i++) {
      if(i < MAX_LENGTH) {
        if(i == MAX_LENGTH - 1)
          parts.push(words[i] + ' ...');
        else
          parts.push(words[i]);
      }
    }

    return parts.join(' ');
  }

  static reduceWord (text, limit) {
    let words= text.split(' ');
    let arr=[];
    if(words.length > limit){
      arr = text.split(' ', limit);
      arr.push(" ...");
      return arr.join(" ");
    }
    return text;
  }
  static reduceYear (text, limit) {
    let words= text.split('-');
    let arr=[];
    if(words.length > limit){
      arr = text.split('-', limit);
      return arr.join(" ");
    }
    return text;
  }

  static concatString (arr) {
    let str = '';
    for(let i=0; i<arr.length; i++) {
      if(i == arr.length - 1)
        str += arr[i];
      else
        str += arr[i] + ', ';
    }

    return str;
  }
  static getPersonDetail (id) {
    return axios.get(apiSite + 'person/' + id, {
      params: {
        api_key: apiKey,
      }
    });
  }

  static getPersonBySearch (page = 1, query = '') {
    return axios.get(apiSite + 'search/person', {
      params: {
        api_key: apiKey,
        query: query,
        page: page,
        include_adult: false
      }
    });
  }
}

export default PeopleService;
