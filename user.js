const userForm=document.querySelector(".js_userForm"),
userInput=userForm.querySelector("input"),
Username=document.querySelector(".js_User");

const USER_NA="currentUsername";
const SHOW="showing"

function saveName(text){
localStorage.setItem(USER_NA,text);
}
function asKUserName(){
    userForm.classList.add(SHOW);
    userForm.addEventListener("submit",handleSubmit)
    
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=userInput.value;
    paintUserName(currentValue);
    saveName(currentValue);
}

function paintUserName(text){
    userInput.classList.remove(SHOW);
    Username.classList.add(SHOW);
    Username.innerText=`Welcome ${text}`;

}

function loadName(){
    const currentUsername=localStorage.getItem(USER_NA);
    if(currentUsername === null){
        asKUserName();
    }else{
        paintUserName(currentUsername);
    }
}


function init(){
    loadName();
}

init();