console.log("Problem Solving Q:17 ");

/* findFirstNonIterativedCharacter */

/*  
Given an arbitrary input string, return the first Non Iteratived character. For strings with all repeats, return 'sorry'
*/

function findFirstNonIterativedCharacter(str) {
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    let result = arr.shift();
    if (!arr.includes(result)) {
      return result;
    }
  }
  return "Sorry";
}

/* 
Examples:
findFirstNonIterativedCharacter('ABCDBIRDUP') // => 'A'
findFirstNonIterativedCharacter('ALABAMA') // => 'L'
findFirstNonIterativedCharacter('Uber for horses') // => 'U'
*/
