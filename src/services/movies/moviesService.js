


export const reduceText = (text,limit) => {
  let words = text.split(' ');
  let arr = [];
  if( words.length > limit) {
    arr = text.split(' ', limit);
    arr.push(" ...");
    return arr.join(" ")
  }

  return text;
}


export default {
  reduceText
}
