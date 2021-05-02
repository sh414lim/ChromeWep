const listForm=document.querySelector(".js-listform"),
listInput=listForm.querySelector("input"),
listArry=document.querySelector(".js-list")

const TODO="todos"


    
let todos=[];


function handleDelete(event){
    const btn=event.target;
    const li=btn.parentNode;
    listArry.removeChild(li);
    const cleanToDos=todos.filter(function(toDo){
        return toDo.id !==parseInt(li.id);
    })
    todos=cleanToDos;
    saveList();
}

function saveList(){
localStorage.setItem(TODO,JSON.stringify(todos))
}

function printList(text){
const li=document.createElement("li");
const but=document.createElement("button");
const span=document.createElement("span");
const newId=todos.length +1;
but.innerText="Del"
but.addEventListener("click", handleDelete)
li.appendChild(but)
li.appendChild(span);
li.id=newId;
span.innerText=text;
listArry.appendChild(li);

const todoObject={
    text:text,
    id:newId
}
todos.push(todoObject);
saveList();
}

function handleSubmitt(event){
event.preventDefault();
const cucrrentValue=listInput.value;
printList(cucrrentValue);
listInput.value="";
}


function loadName(){
    const loadtoDos=localStorage.getItem(TODO);
    if(loadtoDos !== null){
        const paresedTodos=JSON.parse(loadtoDos);
        paresedTodos.forEach(function(toDO){
            printList(toDO.text);
    })
}else{

    }
}
function init(){
    loadName();
    listForm.addEventListener("submit",handleSubmitt);
}

init();
