var array = [2, 3, 3, 5, 7, 10];
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var array2 = [4, 5, 6, 7, 8, 9, 1, 2, 3];

// Q. 1 Write a function that takes an array of integers and returns the sum of all the elements in the array.
function sum(array) {
  var sum = 0;
  // using for loop
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  // using While loop
  // var i=0;
  // while(i<array.length){
  //   sum += array[i];
  //   i++;
  // }
  return sum;
}
// console.log(sum(array));

// Q Write a function that takes an array of integers and returns the maximum value in the array.
function Max(array) {
  var max = array[0];
  // using for loop
  // for (var i = 0; i < array.length; i++) {
  //   if (array[i] > max) {
  //     max = array[i];
  //   }
  // }

  // using do while
  var i = 0;
  do {
    if (array[i] > max) {
      max = array[i];
    }
    i++;
  } while (i < array.length);

  return max;
}
// console.log(Max(array));

//Q Write a function that takes an array of integers and returns the minimum value in the array.
function Min(array) {
  var min = array[0];
  // for (var i = 0; i < array.length; i++) {
  //   if (array[i] < min) {
  //     min = array[i];
  //   }
  // }
  return min;
}
// console.log(Min(array));

// Write a function that takes an array of integers and returns a new array that contains only the even numbers in the original array.
function even(array) {
  var even = [];
  // for (var i = 0; i < array.length; i++) {
  //   if (array[i] % 2 === 0) {
  //     even.push(array[i]);
  //   }
  // }
  var i = 0;
  while (i < array.length) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    }
    i++;
  }
  return even;
}
// console.log(even(array));

// Write a function that takes an array of integers and returns a new array that contains only the odd numbers in the original array.
function odd(array) {
  var odd = [];
  // for (var i = 0; i < array.length; i++) {
  //   if (array[i] % 2 !== 0) {
  //     odd.push(array[i]);
  //   }
  // }
  var i = 0;
  do {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    }
    i++;
  } while (i < array.length);
  return odd;
}
// console.log(odd(array));

// Write a function that takes an array of integers and returns the average value of the elements in the array.
function average(array) {
  var avg = 0;
  for (var i = 0; i < array.length; i++) {
    avg += array[i];
  }
  avg /= array.length;

  return avg;
}
// console.log(average(array));

// Write a function that takes an array of integers and returns the number of elements in the array that are greater than a given value.
function greater(array, target) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > target) {
      count++;
    }
  }
  return count;
}
// console.log(greater(array,2));

// Write a function that takes two arrays of integers and returns a new array that contains the elements that appear in both arrays.
function concat(array1, array2) {
  var dup = [];

  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        dup.push(array1[i]);
      }
    }
  }
  return dup;
}

// console.log(concat(array1, array2));

// var num = [1,20,13,4,5,8];
// num.splice(1, 1);
// console.log(num);

// Q. Write a function that takes two arrays of integers and returns a new array that contains the sum of both arrays combined.
// For example : arr1 = [1,2,3,4,5,6,7,8,9], arr2 = [4,5,6,7,8,9,1,2,3]. Output = [5,7,9,11,13,15,8,10,12].
// function sumOfArr(arr1, arr2) {
//   var Array = [];
//   for (var i = 0; i < arr1.length; i++) {
//     Array.push(arr1[i] + arr2[i]);
//   }
//   return Array;
// }
// // console.log(sumOfArr(array1, array2));

// // Q. Reverse Number
// // function Reverse(number) {
// //   console.log(number / 10);
// // }
// // Reverse(122);

// var number =122;


// array= [1,2,3,4,5,6];

// function random(array) {
//   let currentIndex = array.length;
//   let randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }
//   return array;
// }

// console.log(random(array));


// var x = Math.random();
// console.log(x);