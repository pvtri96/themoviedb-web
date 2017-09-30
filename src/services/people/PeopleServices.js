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
    let words= text.split(" ");
    let arr=[];
    if(words.length > limit){
      arr = text.split(" ", limit);
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
  //remove movies null year
  static removeMovies(array) {
    let result;
    for(let i=0; i< array.length; i++){
      if( array.year != null){
        result.push(array[i]);
      }
    }
    return result;
  }
  //javascript function: sort array by year
  static sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
  //split array
  static splitArray(array, key){
    let arr1=[];
    for(let i = 0; i< array.length; i++){
      if(array[i].department == key){
        arr1.push(array[i]);
      }
    }
    return arr1;
  }
  static changeNullDateMovies(array){
    for(let i=1; i<array.length; i++) {
      if(array[i].release_date == null)
        array[i].release_date = "1900-01-01";
    }
    return array;
  }
  static changeNullDateTV(array){
    for(let i=1; i<array.length; i++) {
      if(array[i].first_air_date == null)
        array[i].first_air_date = "1900-01-01";
    }
    return array;
  }
}
export default PeopleService;
