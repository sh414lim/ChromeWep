const COORDS='coords';

function handleHeoSucces(postition){
    console.log(position);
}

function hadleGeoError(){
    console.log("Can't access geo location")
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleHeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCords=localStorage.getItem(COORDS);
    if(loadCoords === null){
        askforCoords();
    }else{
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();