const API_KEY="c98df855229618a9bfa933d0f92f953f"
const COORDS='coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj))
}

function handleHeoSucces(postition){
    const latitude=postition.coords.latitude;
    const longitude=postition.coords.longitude;
    const coordsObj={
        latitude,
        longitude,
    }
    saveCoords(coordsObj);
}

function hadleGeoError(){
    console.log("Can't access geo location")
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleHeoSucces,hadleGeoError); //위치 정보를 읽는 방법
}

function loadCoords(){
    const loadedCords=localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();