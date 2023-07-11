// Hoisting
//Hoisting is default Js behaviour to move declaration to top
// x=6;
// console.log(x);
// var x;
//Hoisting move only declaration not initialization
// var x5;
// console.log(x ,y);
// var y =6;
// It is not possible with let and const
// x=6;
// console.log(x);
// let x; //reference error

// x=6;
// console.log(x);
// const x; //Syntax error

// Clouser
function parent() {
  var myage = 22;
  function Children() {
    console.log(myage);
  }
  return Children;
}

let Age = parent();
Age();
