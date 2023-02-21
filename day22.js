// function functionName(){
//     alert(`Hello !`);
// }

function addTodo(){
    var gettingTodos =document.getElementById("todosHere").value;
    if (gettingTodos){
        var myTodosFromLS =JSON.parse(localStorage.getItem("todos") ) || [];
        myTodosFromLS.push(gettingTodos);
        localStorage.setItem("todos" , JSON.stringify(myTodosFromLS));
        document.getElementById('todosHere').value = "";
        alert("Todo Added");

    }
    else{
        alert('Add to do first,before submitting !');
    }
//     console.log(gettingTodos,"gettingTodos");
//     alert("added");
// }
}

function cs() {
  var divFromHtml = document.getElementById("displayTodos");

  var gettingTodosFromLS = JSON.parse(localStorage.getItem("todos"));
  console.log(gettingTodosFromLS, "gettingTodos");

  var finalStructure = [`<div id="header"><p>Todos</p><p>Completed</p></div>`];

  for (var i = 0; i < gettingTodosFromLS.length; i++) {
    // var div = document.createElement("div");
    // var p =document.createElement("p");
    // p.innerText =gettingTodosFromLS[i];
    // div.append(p);
    // finalStructure.push(div);

    finalStructure += `<div id="row">
        <p>${gettingTodosFromLS[i]}</p>
        <i class="fa-solid fa-trash-can" onclick="deleteToDo(${i})"></i>
        </div> `; //passing structure into the array
  }

  // console.log(finalStructure ,"finalStructure");
  divFromHtml.innerHTML = finalStructure;
}

cs(); //call the function to display todos without adding button element

function deleteToDo(todoIndex) {
  var ToDosFromLs = JSON.parse(localStorage.getItem("todos"));

  ToDosFromLs.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(ToDosFromLs));
  cs();
}
