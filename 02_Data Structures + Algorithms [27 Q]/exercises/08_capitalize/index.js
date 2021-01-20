// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const arr = str.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].replace(arr[i][0], arr[i][0].toUpperCase()));
  }
  return result.join(" ");
}
module.exports = capitalize;
