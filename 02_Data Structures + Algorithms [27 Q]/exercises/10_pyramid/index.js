// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const length = 2 * n - 1;
  const mid = Math.floor(length / 2);
  for (let j = 0; j < n; j++) {
    str = "";
    for (let i = 0; i < length; i++) {
      if (j < mid - 1 || j > mid + 1) {
        str += " ";
      } else {
        str += "#";
      }
    }
    console.log(str);
  }
}

module.exports = pyramid;
