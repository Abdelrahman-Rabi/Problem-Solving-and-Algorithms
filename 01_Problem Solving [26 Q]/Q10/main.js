console.log("Problem Solving Q: 10");

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(str) {
  arr = str.replace(/[' ']/g, "").split("");
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else obj[arr[i]] = 1;
  }
  return Math.max(...Object.values(obj));
}

/* 
Examples:
timesOfMostFreqChar('hello world') // => 3
timesOfMostFreqChar('hello world lol') // => 5
timesOfMostFreqChar('hello world lol woooow') // => 7
timesOfMostFreqChar('hello world lol wow www.com') // => 6
*/
