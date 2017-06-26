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
const getCrewMovie = (crew, limit) => {
  const jobs = ["Director", "Screenplay", "Characters", "Story", "Writer"];
  let temp = [];
  crew.map(item => {

    if(jobs.includes(item.job)){
      temp.push(item);
    }

  });
  return temp.slice(0, limit);
};
export default {
  subContentString,
  subTitleString,
  subDateString,
  getCrewMovie
};
