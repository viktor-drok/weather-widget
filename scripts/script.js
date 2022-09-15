const temperatureOutput = document.querySelector('.temperature');
const cityOutput = document.querySelector('.city');
const cityInput = document.querySelector('input');

let temperature = 0;

function sendRequest() {
    let city = cityInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2189a914e12606ce4c9859c83645d40e`;

    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod == '404') {
                temperatureOutput.style.fontSize = '40px';
                cityOutput.style.fontSize = '40px';
                temperatureOutput.innerText = 'Sunny :)';
                cityOutput.innerText = 'Enter correct city name';
            } else {
                temperatureOutput.style.fontSize = '80px';
                cityOutput.style.fontSize = '60px';
                temperatureOutput.innerText = `${(data.main.temp).toFixed() - 273}°C`;
                cityOutput.innerText = data.name;
            }
        });
}

onkeydown = (evt) => {
    if (evt.key == 'Enter' && !(city = '')) {
        sendRequest();
        getLatLon();
        renderMap();
    };
};

getLatLon();



const coord = [30.5167, 50.4333];

function getLatLon() {
    let city = cityInput.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2189a914e12606ce4c9859c83645d40e`;

    return fetch(url).then((response => response.json())).then((data) => {
        lon = data.coord.lon;
        lat = data.coord.lat;
        console.log(lat);
        console.log(lon);
        console.log(coord);
        coord.splice(0, 2, lon, lat);
    });
}
let map;

function renderMap() {
    getLatLon().then(window.initMap = initMap);
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: coord[1], lng: coord[0] },
        zoom: 8,
    });
}



// window.initMap = initMap;
