function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    let solution = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === solution) return true;
    }
  }
  return false;
}

/* 
  i believe 0(n+1)
*/

/* 
  function hasTArgetSum(array,target)
  return true if any pair of numbers in the array adds up to the target number
  so if solution = target in the array, return true
  check array length of i, solution = target number - i
  then do the same thing for the second number
  check second number array against the solution
*/

/*
  Needed Google help, but basically we are setting the first number (i) in an array to 0 and saying it's less than the length of the array, and adding to it.
  Then letting the solution of the number in the array equaling the target number - the i(number) in the array.
  We take that number (i) and set a second number = to it +1, and compare that second number to the length of the array and add to that as well. 
  Then an if statement where the array number of number 2 (j) set equal to the solution number set to true, else false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
