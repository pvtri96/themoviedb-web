// "2017-04-19"
export const changeTextDate = (date) => {
  return date.split("-").reverse().join("/");
}

export const reduceWordsText = (text,limit) => {
  let words = text.split(" ");
  let arr = [];
  if( words.length > limit) {
    arr = text.split(" ", limit);
    arr.push(" ...");
    return arr.join(" ");
  }

  return text;
};

export const reducerLengthText = (text, limit) => {
  if(text.length > limit)
    return text.substring(0, limit) + " ...";

  return text;

};

export const getGenresMovie = (inititalGenres, genres) => {
  let temp = [];
  genres.map(genre => {
    if(inititalGenres.includes(genre.id))
      temp.push(genre.name);
  });
  return temp.join(', ');
};

export const getCrewMovie = (crew, limit) => {
  const jobs = ["Director", "Screenplay", "Characters", "Story", "Writer"];
  let temp = [];
  crew.map(item => {

    if(jobs.includes(item.job)){
      temp.map(sub_item => {
        if(item.id === sub_item.id)
          sub_item.job += ', ' + item.job;
      });
      temp.push(item);
    }

  });
  return temp.slice(0, limit);
};

export const getTopBilledCast = (cash, limit) => {
  return cash.slice(0, limit);
};

export const getRandomReview = (reviews) => {
  return reviews[Math.floor(Math.random() * reviews.length)];
};

export const getLimitVideos = (videos, limit) => {
  return videos.slice(0, limit);
}

export const getLimitBackdrops = (backdrops, limit) => {
  return backdrops.slice(0, limit);
}

export const getLimitPosters = (posters, limit) => {
  return posters.slice(0, limit);
}

export default {
  changeTextDate,
  reduceWordsText,
  reducerLengthText,
  getGenresMovie,
  getCrewMovie,
  getTopBilledCast,
  getRandomReview,
  getLimitVideos,
  getLimitBackdrops,
  getLimitPosters

};
