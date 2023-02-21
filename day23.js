
// function populateStorage() {
//     localStorage.setItem('bgcolor', 'red');
//     localStorage.setItem('font', 'Helvetica');
//     localStorage.setItem('image', 'myCat.png');
//   }

// function remove(){
//     localStorage.removeItem('bgcolor');
// }

// function display(){
//     document.getElementById("demo").innerHTML = localStorage.getItem('image');
     
// }
// function removeAll(){
//     localStorage.clear();
// }

function create(){
    var mainDiv =document.getElementById("page");
    var div =document.createElement("div");
    var h1 =document.createElement("h1");
    h1.innerHTML ="Hello Structure";
    h1.style.color ="blue";
    mainDiv.append(div);
    div.append(h1);
}