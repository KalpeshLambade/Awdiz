//Array
// var array = [10 , 20 , 30 , 8 ,9 ,10];

// // for(var i in array){
// //     console.log(i);
// // }//gives indices of array

// for(var j of array){
//     console.log(j);
// }// gives the value of indices

// var animals = ['pigs', 'goats', 'sheep'];

// animals.push('cats','chicken','dogs');// adds one or more element to the end of the array and return new length
// console.log(animals);

// animals.unshift('cats','chicken','dogs');
// console.log(animals);

// animals.pop();// removes last elements of an array and returns the elements
// console.log(animals);

// animals.shift() ;//removes the first element from an array and returns that removed element
// console.log(animals);

// // slice returns a copy of an array include the first but not the last elements
// console.log(animals.slice(2));
// console.log(animals);
// console.log(animals.slice(2,4));
// console.log(animals.slice(2,-1));

// // splice 
// console.log(animals);

// animals.splice(1 ,0 ,'hourses'); // insert elements at index 1
// console.log(animals);

// animals.splice(1 ,1, 'hourses');// replace an elements at given index
// console.log(animals);

// //Objects
// var animals ={
//     'name' : ['dog', 'cat','cow'],
//     'age' : [20, 15 ,14 ]
// };
//  console.log(animals.name);
//  console.log(animals.age);

//  for( var i of animals.age){
//     console.log(i);
//  }

// Functions
// Factorial using function
// var number= 5;
// var answer =factorial(number);

// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }

// console.log(answer);

// function factorial(n){

//     var factoral= 1;
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     else{
//         for (var i=n ; i > 1 ;i--){
//             factoral *= i ;
//         }
//         return factoral;   
//     }
// }



    

