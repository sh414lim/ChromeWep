const weather=document.querySelector(".js-weather");


const API_KEY="c98df855229618a9bfa933d0f92f953f";

const COORDS='coords';

function getWeather(lat,lng){
    //데이터를 얻을 떄는 fetch  사용
    //fetch 안에는 가져올 데이터가 들어 가면된다. 앞에 https:// 을 넣어주고 백틱으로 감싼다.
    //이렇게 하면 API를 제공하는 쪽에서
     fetch(
         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${ API_KEY}&units=metric`
         ).then(function(response){
             return response.json()
         }).then(function(json){
            const temperature=json.main.temp;
            const place=json.name;
            weather.innerText=`${temperature} @ ${place}`;
         })
         //fetch가 완료되길 기다리기 위해 then 을 사용한다.
        //then() 데이터가 완전히 들어온 다음 호출한다.

}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

//좌표를 가져오는데 성공했을때를 처리하는 함수
    function handleGeoSucces(position){
        const latitude =  position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj={
            latitude,
            longitude
        }
        saveCoords(coordsObj);
        getWeather(latitude,longitude)
    }

    function handleGeoError(){
        console.log("Can't access geo location");
    }


function askForCoords() {
    //두 개의 requirements
navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}



function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords(); //좌표 요청 함수
    }else{
        const parseCoords=JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    
    }
}

function init(){
    loadCoords();
}

init();
