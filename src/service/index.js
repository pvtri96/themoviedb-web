const subContentString = (text, limit) => {
  let arr = [];
  if (text.split(" ").length > limit ) {
    arr = text.split(" ", limit);
    arr.push("...");
    return arr.join(" ");
  }
  return text;
};

const subTitleString = (text, limit) => {
  if(text.length > limit )
    return text.substring(0,limit) + "...";
  return text;
};

const subDateString = (text, limit) => {
  if(text.length > limit )
    return text.substring(0,limit);
  return text;
};

const getGenres = (initialState, genres) => {
  let arr = [];
  genres.map(genre => {
    if(initialState.includes(genre.id))
      arr.push(genre.name);
  });
  return arr.join(', ');
};

export default {
  subContentString,
  subTitleString,
  subDateString,
  getGenres
};
