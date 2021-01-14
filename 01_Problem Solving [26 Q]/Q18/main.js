console.log("Problem Solving Q:18 ");

/*  findFactorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function findFactorial(num) {
  let fact = 1;
  while (num > 1) {
    fact *= num;
    num--;
  }
  return fact;
}

/* 
Examples:
findFactorial(1) // => 1
findFactorial(3) // => 6
findFactorial(4) // => 24
*/
