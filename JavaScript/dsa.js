// // Q  Print the number from 20-40 ,which are even
// for(var i=20 ;i<41 ;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }
// // Q Print the count from 20-40 ,which are even
// var count=0;
// for(var i=20 ; i<41 ; i++ ){
//     if(i%2===0){
//         count++;
//     }
// }
// console.log(count);

// Q print count of numbers from 147-254 which are divisible by 3 and odd
var count=0;
for(var i=147 ; i<255 ; i++ ){
    if((i%3===0) && (i%2 != 0)){
        count++;
    }
}
console.log(count);

// Q. Find count of number 45 from given Array. 
var count =0;
var array = [12 ,13 ,45, 67,43,45,76,89,54,23,7,8787,243,23234];

for( var i=0 ; i< array.length ; i++){
    if(array[i] === 45){
        count++;
    }
}
console.log(count);


// Question

// var nums= [2 ,7 ,11, 15];
// var target =9;

// for( var i=0; i<nums.length-1 ;i++) //0, 1,2,3,4  to avaid 4th extra iteration length-1
// {

//     for( var j=i+1 ;j<nums.length ;j++){


//         if(nums[i]+nums[j] === target){

//             console.log(nums[i], nums[j] );
//         }
//     }
// }

// Q. Find addition of every second number from 57689-346578
// var sum=0;
// var count =1;
// for( var i=1; i<= 10 ; i++){
//     if(count % 2 === 0){
//         sum = i+ sum;
//     }
//     count++;
// }
// console.log(sum);

// var firstDigit =57689;
// var lastDigit =346578;
// var add =0;
// for (var i =firstDigit+1; i <= lastDigit ; i+=2){
//     add= add + i;
// }
// console.log(add);

// Q find]ind three numbers which addition is targer
var array =[2,4,6,8,9,10,13,78,12,34,23];
var target =35;


for( var i=0 ;i<array.length-2 ; i++){
    for( var j=i+1; j<array.length-1 ; j++){
        for( var k=j+1 ;k<array.length ; k++){
            if( array[i] + array[j]+ array[k] === target){
                console.log(array[i] , array[j] ,array[k]);
            }
        }
        
    }
    
}

