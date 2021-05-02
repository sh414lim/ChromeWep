

const COORDS="coords"

function handleGeoSucces(position){
    consoke.log(position);
}

function handleGeoError(){
    console.log("can't access geo location")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCords=localStorage.getItem(COORDS);
    if(loadedCords === null){
        askforCoords();
    }else{
        //getWearger
    }
}

function init(){
    loadCoords();
}
init();