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

const getGenresMovie = (inititalGenres, genres) => {
  let temp = [];
  genres.map(genre => {
    if(inititalGenres.includes(genre.id))
      temp.push(genre.name);
  });
  return temp.join(', ');
};

export default {
  subContentString,
  subTitleString,
  subDateString,
  getGenresMovie
};
