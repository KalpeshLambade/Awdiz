// var array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// var obj = [];
// var dup = [];

// for (var i = 0; i < array.length; i++) {
//   if (array[i] === array[i + 1]) {
//     dup.push(array[i]);
//   } else {
//     obj.push(array[i]);
//   }
// }

// console.log(obj);

// var array = [1,2,5,3,4,5,6,7,5,5,8,9,5,10,5,2,5,5,5];
// var target = 5;

// var temp;

// for(var i=0; i<array.length;){
//     if(array[i] === target){
//          array.splice(i,1);
//     }
//     else{
//         i++;
//     }

// }xxx

// // console.log(temp);
// console.log(array);

// Q .1
// var sum =0;
// for (i = 1; i < 8; i++) {
//   if (i % 3 === 0 || i % 5 === 0 || i % 6 === 0 || i % 7 === 0) {
//     sum+=i;
//   }
// }
// console.log(sum);

// Q . 2
var array = [
  [0, 0,0],
  [0, 1,1],
];
var temp = [];

for (var i = 0; i < array.length; i++) {
  var count = 0;
  for (var j = 0; j < array[i].length; j++) {
    if (array[i][j] === 1) {
      count++;
    }
  }
  temp.push(count);
}

var maxNum=0;
var maxIndex;
var newArray= [];
for(var k=0; k<temp.length; k++){
    if(temp[k] > maxNum){
        maxNum = k;
        maxIndex =temp[k]
    }
}

newArray.push(maxNum, maxIndex)
console.log(newArray);

