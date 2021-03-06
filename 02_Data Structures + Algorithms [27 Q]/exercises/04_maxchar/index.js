// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  for (let char of str) {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  max = Math.max(...Object.values(obj));
  return Object.keys(obj).find((key) => obj[key] === max);
}

module.exports = maxChar;
