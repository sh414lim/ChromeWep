const body=document.querySelector("body");


const IMG_NUMBER=5;




function paintImage(imageNumber){
const image = new Image()
image.src=`image/${imageNumber + 1}.jpg`;
image.classList.add("bgimg")
body.prepend(image)
}

function genRandom(){
    const number=Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
const randomNumber=genRandom();
paintImage(randomNumber);
}
init();