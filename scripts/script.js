const temperatureOutput = document.querySelector('.temperature');
const cityOutput = document.querySelector('.city');
const cityInput = document.querySelector('input');

let temperature = 0;
// let city = '';

// const temperatureC = TK - 273

// async function sendRequest() {
//     const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Lviv&APPID=2189a914e12606ce4c9859c83645d40e');
//     const data = await response.json();
//     return console.log(data);
// }

function sendRequest() {
    let city = cityInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2189a914e12606ce4c9859c83645d40e`;

    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            temperatureOutput.innerText = `${(data.main.temp).toFixed() - 273}°C`;
            cityOutput.innerText = data.name;
        });
}

onkeydown = (evt) => {
    if (evt.key == 'Enter' && !(city = '')) sendRequest();
}; 