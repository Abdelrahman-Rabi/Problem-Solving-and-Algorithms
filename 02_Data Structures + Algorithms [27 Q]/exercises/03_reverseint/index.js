// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  arr = n.toString().split("");
  let result = [];
  for (let i = arr.length; i >= 0; i--) {
    result.push(arr[i]);
  }
  if (n >= 0) {
    return parseInt(result.join(""));
  } else {
    return parseInt(result.join("")) * -1;
  }
}

module.exports = reverseInt;
