//if else
var score=30;
if(score >35){
    console.log("You'r Qualified");
}
else{
    console.log(`You'r not qualified with ${score} marks`)
}

//Driving lic.
var userAge = 21
if(userAge >18){
    console.log("user is applicable");
}
else if (userAge==18){
    console.log("User is applicable for learning lic");
}
else{
    console.log("User is not applicable");
}

//Even and odd 
var userNumber = 12 ;
if((userNumber%2) == 0){
    console.log(`provided number ${userNumber} is even`);
} 
else{
    console.log(`provided number ${userNumber} is odd`);
}

// Switch case
var ans="pune";
switch (ans) {
    case "Dehli":
        console.log(`${ans} is not capital of maharashtra`);
        break;

    case ("Mumbai"):
        console.log(`${ans} answer is correct`);
            break;

    case "nagpur":
        console.log(`${ans} is not capital of maharashtra`)
        break;

    case "Pune":
        console.log(`${ans} is not capital of maharashtra`)
        break;

    default:
        console.log("Select Proper answer")
        break;
}