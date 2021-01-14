console.log("Problem Solving Q: 20");

/* MaximumProductOfThree */

/*  
Write a function that accepts an array of integers and returns the Maximum product possible from three of those numbers.
*/

function MaximumProductOfThree(arr) {
  let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    let maxNum = Math.max(...arr);
    maxArr.push(maxNum);
    if (maxArr.length === 3) {
      return maxArr[0] * maxArr[1] * maxArr[2];
    }
  }
  return "error";
}

/* 
Examples:
MaximumProductOfThree([2, 1, 3, 7]) // => 42
MaximumProductOfThree([0, 2, 3]) // => 0
MaximumProductOfThree([2, 3, 5]) // => 30
*/
