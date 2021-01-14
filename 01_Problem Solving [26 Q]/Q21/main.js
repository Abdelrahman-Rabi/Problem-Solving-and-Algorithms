console.log('Problem Solving Q: 21');

/* removeNotUnique */

/*  
Given a string, delete any characters that are not unique from the string.
*/

function removeNotUnique(str) {
  let arr = str.split('').forEach(element => {
    if(arr.includes(element))
  });
}

/* 
Examples:
removeNotUnique('hello there') // => 'o tr'
removeNotUnique('xyz') // => 'xyz'
removeNotUnique('iiii') // => ''
*/