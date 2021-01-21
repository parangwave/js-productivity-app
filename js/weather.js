const weather = document.querySelector(".js-weather");

const API_KEY = "b96f02310ddedb033819e2075d7f161d";
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return (response.json());
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}℃ @ ${place}`
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longtitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longtitude);
}

function handleGeoError() {
    console.log('Can\'t access Geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) { 
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longtitude);
    }
}

function init() {
    loadCoords();
}

init();