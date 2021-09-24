// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:
// Testing my fucntion. 
console.log(validateCred(valid1))
console.log(validateCred(valid2))
console.log(validateCred(valid3))
console.log(validateCred(valid4))
console.log(validateCred(valid5))
console.log(validateCred(invalid1))
console.log(validateCred(invalid2))
console.log(validateCred(invalid3))
console.log(validateCred(invalid4))
console.log(validateCred(invalid5))
console.log(validateCred(mystery1))
console.log(validateCred(mystery2))
console.log(validateCred(mystery3))
console.log(validateCred(mystery4))
console.log(validateCred(mystery5))
// Write a function validateCred (array) 
function validateCred(array) {
    // declaring variables needed later in the function.
  let totalValue = 0;
  let even = 0;
  let finalValue = 0;
  let odd = 0;
//   finding the length of the array. If it's total length is an even number, do this:
if((array.length-1) % 2 === 0) {
  // console.log('this array is an even index')
  //   iterate through the array, backwards. 
  for (let i = array.length-1; i >= 0; i--){
    //   if its the check digit:
    if (i === array.length-1){
      // console.log(i + ' the check digit is: ' + array[i])
    //   add to array. 
      totalValue += array[i];
      // console.log(totalValue)
    //   Check if i is odd or even:
    //  if odd:
    } else if (i % 2 !== 0) {
      odd = array[i] * 2;
       if (odd > 9){
       odd = odd - 9;
    }
    // console.log(i + ' odd number is: ' + odd)
    totalValue += odd
    // console.log("****" + totalValue + "****")
  } else if (i % 2 === 0) {
      totalValue += array[i];
      // console.log(i + ' odd number is: ' + array[i])
      } else if (i % 2 !== 0) {
      totalValue += array[i];
        //  console.log("****" + totalValue + "****");
    }
    // console.log(totalValue)
  }
    // if the card number has an odd index. 
} else {
  // console.log('this array has an odd index')
  for (let i = array.length-1; i >= 0; i--) {
    if (i === array.length-1) {
      // console.log('This is the check digit: ' + array[i]) 
      totalValue += array[i];
      // console.log(i, totalValue)
    } else if (i % 2 === 0) {
      // console.log(i + ' Its Even:' + array[i])
      even = array[i] * 2;
      // console.log('* 2: ' + even)
      if (even > 9){
       even = even - 9;
      //  console.log(even)
      } 
      totalValue += even;
      // console.log(i, totalValue)
    } else if (i % 2 !== 0) {
      totalValue += array[i];
        //  console.log(i, totalValue);
    }
  }
}
  // console.log(totalValue)
//   divide total value by 10:
  finalValue = totalValue % 10;
  // console.log(finalValue);
//   if finalValue === 0, its Valid. 
  if (finalValue === 0){
    return true;
  } else {
    //   else its invalid
    return false;
  }
}

// function to find invalid card numbers, takes a nested array
const findInvalidCards = nestedArray => {
    const invalidCards = [];
    // iterate through and pass to validateCred
    const current = nestedArray.map(validateCred)
    // loop though the new array of false or correct numbers 
      for(let i = 0; i < current.length; i++) {
        //   if false, grab that number and push to invalidCards
    if (current[i] === false) {
      invalidCards.push(nestedArray[i])
    } 
    }
    return invalidCards
  }