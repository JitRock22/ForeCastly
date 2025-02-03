const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('search-btn');
const weather_img = document.querySelector('#weather_img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const windspeed = document.querySelector('#wind');
const location_not=document.querySelector('.location-not');
const data=document.querySelector('.content-body');
async function checkWeather(city) {
    const api_key = "6ff5cffebbb07322feebd912649928fb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod==`404`){
        location_not.style.display="flex";
        data.style.display="none";
        console.log("error");
        return;
    }
    location_not.style.display="none";
    data.style.display="flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273)}&deg;C`;
    description.innerHTML = `${(weather_data.weather[0].description)}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windspeed.innerHTML = `${Math.round(weather_data.wind.speed * 3.6)}Km/h`;
    // console.log(weather_data);

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "./assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "./assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "./assets/snow.png";
            break;

    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});