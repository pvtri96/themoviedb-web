

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

export const changeTextDate = (date) => {
  return date.split("-").reverse().join("/");
}

export const reduceWordsText = (text,limit) => {
  let words = text.split(" ");
  let arr = [];
  if( words.length > limit) {
    arr = text.split(" ", limit);
    arr.push("...");
    return arr.join(" ");
  }

  return text;
};

export const reducerLengthText = (text, limit) => {
  if(text.length > limit)
    return text.substring(0, limit) + "...";

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

export const getCrewMovie = (crew, jobs, limit) => {

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
};

export const getLimitBackdrops = (backdrops, limit) => {
  return backdrops.slice(0, limit);
};

export const getLimitPosters = (posters, limit) => {
  return posters.slice(0, limit);
};

export const setMinutesToHours = (time) => {
  const m = time % 60;
  const h = (time - m) / 60;
  return h + "h " + m + "m";
};

export const setTextMoney = m => {
  let result = m.toLocaleString(
    "en-US", // use a string like 'en-US' to override browser locale
    { minimumFractionDigits: 2 }
  );
  return result;
};

export const getElementWithIndex = (arr, index) => {
  return arr.slice(index, index+1)[0];
};

// lay mang gia tri theo thuoc tinh tu mot mang object
export const getNameCreatedByOfTvshows = (arr) => {
  let result = [];
  arr.map(object => {
    result.push(object.name);
  });
  return result;
};

export const getNetworkTvshows = (networks) => {
  let temp = [];
  networks.map(network => {
    temp.push(network.name);
  });
  return temp.join(', ');
};

export const getLastSeasonNumber = (seasons) => {
  return seasons[seasons.length-1].season_number;
};

export default {
  subContentString,
  subTitleString,
  subDateString,
  getGenres,
  changeTextDate,
  reduceWordsText,
  reducerLengthText,
  getGenresMovie,
  getCrewMovie,
  getTopBilledCast,
  getRandomReview,
  getLimitVideos,
  getLimitBackdrops,
  getLimitPosters,
  setMinutesToHours,
  setTextMoney,
  getElementWithIndex,
  getNameCreatedByOfTvshows,
  getNetworkTvshows,
  getLastSeasonNumber,


};
