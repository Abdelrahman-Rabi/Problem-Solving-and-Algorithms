console.log("Problem Solving Q:18 ");

/*  factorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function factorial() {
  function factorial(num) {
    if (num < 0) {
      return -1;
    } else if (num === 0) {
      return 1;
    } else {
      for (let i = num; i > 1; i--) {
        num = num * i;
      }
      return num;
    }
  }
}

/* 
Examples:
factorial(1) // => 1
factorial(3) // => 6
factorial(4) // => 24
*/
