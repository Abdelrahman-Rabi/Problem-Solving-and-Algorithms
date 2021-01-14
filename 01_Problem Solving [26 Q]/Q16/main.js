console.log("Problem Solving Q:16 ");

/* evenAppearance */

/*  
Find the first item that appear an even number of times in an array.
*/

function evenAppearance(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr.shift();
    if (arr.includes(num)) {
      return num;
    }
  }
}

/* 
Examples:
evenAppearance([1,2,6,6]) // => 6
evenAppearance([1,2,9,8,8,6,6]) // => 8 
evenAppearance([1,9,7,3,6,6,8,9,9]) // => 6
*/
