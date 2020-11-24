console.log("Problem Solving Q: 5 ");

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
the first element will represent a list of comma-separated numbers sorted in ascending order,
 the second element will represent a second list of comma-separated numbers (also sorted). 
 Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr 
 in sorted order. If there is no intersection, return the string false.
*/

function findIntersection(strArr) {
  let oneArr = [];
  let twoArr = [];
  let elemOne = strArr[0];
  let elemTwo = strArr[1];

  elemOne.split(",").map((number) => {
    oneArr.push(Number(number));
  });
  elemTwo.split(",").map((number) => {
    twoArr.push(Number(number));
  });

  let result = twoArr.filter((num) => oneArr.includes(num)).toString();
  return result;
}

/* 
Examples:
findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/
