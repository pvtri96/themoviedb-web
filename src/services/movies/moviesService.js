
export const reduceWordsText = (text,limit) => {
  let words = text.split(' ');
  let arr = [];
  if( words.length > limit) {
    arr = text.split(' ', limit);
    arr.push(" ...");
    return arr.join(" ");
  }

  return text;
};

export const reducerLengthText = (text, limit) => {
  if(text.length < limit)
    return text;
  return text.substring(0, limit) + '...';
};

export const getGenresMovie = (inititalGenres, genres) => {
  let temp = [];
  genres.map(genre => {
    if(inititalGenres.includes(genre.id))
      temp.push(genre.name);
  });
  return temp.join(', ');
};

export default {
  reduceWordsText,
  reducerLengthText,
  getGenresMovie
};
