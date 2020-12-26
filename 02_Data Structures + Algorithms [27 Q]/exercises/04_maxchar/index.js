// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  arr = str.split("");
  obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] >= 1) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  const max = Math.max(...Object.values(obj));
  return Object.keys(obj).find((key) => obj[key] === max);
}

module.exports = maxChar;
