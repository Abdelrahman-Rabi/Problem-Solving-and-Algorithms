// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  arr = str.split("");
  let result = [];
  for (let i = arr.length; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result.join("");
}

module.exports = reverse;
