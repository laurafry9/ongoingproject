let now = new Date();
let dateDisplay = document.querySelector("h2.day-time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
dateDisplay.innerHTML = `${day} ${hours}:${minutes}`;
function getSearchedCity(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#enter-city");
  let displayedCity = document.querySelector("#city-name-value");
  displayedCity.innerHTML = `${cityValue.value}`;
  let apiKey = "e11ebc4d827268b35ca3d430280dba81";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
let city = document.querySelector("#main-form-city");
city.addEventListener("submit", getSearchedCity);

function displayWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°`;
  let descriptionElement = document.querySelector("#searched-weather");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity-value");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind-value");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
