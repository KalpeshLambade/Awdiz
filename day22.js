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

