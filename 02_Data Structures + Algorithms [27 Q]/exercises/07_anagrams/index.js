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
  let strA = stringA.replace(/[^A-Za-z0-9\_]/g, "").toLowerCase();
  let strB = stringB.replace(/[^A-Za-z0-9\_]/g, "").toLowerCase();
  if (strA.length === strB.length) {
    let common = "";
    for (let char of strA) {
      if (strB.includes(char)) common += char;
    }
    return strA === common;
  } else return false;
}

module.exports = anagrams;
