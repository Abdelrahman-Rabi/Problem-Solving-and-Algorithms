console.log("Problem Solving Q:14 ");

/* ArrayCenter */

/*  
Given an array of negative/positive integers, return the element in the middle position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayCenter(arr) {
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  } else return arr[arr.length / 2 - 0.5];
}

/* 
Examples:
ArrayCenter([200,5,100]) // => 5
ArrayCenter([2,3,2,3,2]) // => 2
ArrayCenter([2,3]) // => 2.5
*/
