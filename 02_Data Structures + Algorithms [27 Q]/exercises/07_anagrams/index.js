// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const arrA = stringA
    .replace(/[^A-Za-z0-9\_]/g, "")
    .toLowerCase()
    .split("");
  const arrB = stringB
    .replace(/[^A-Za-z0-9\_]/g, "")
    .toLowerCase()
    .split("");
  if (arrA.length === arrB.length) {
    for (let i = 0; i < arrA.length; i++) {
      if (!arrB.includes(arrA[i])) return false;
    }
  } else return false;
  return true;
}

module.exports = anagrams;
