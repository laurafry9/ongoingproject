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

function popularCityShanghai(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#shanghai-button");
  let displayedCity = document.querySelector("#city-name-value");
  displayedCity.innerHTML = `Shanghai`;
  let apiKey = "e11ebc4d827268b35ca3d430280dba81";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Shanghai&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
let shanghai = document.querySelector("#shanghai-button");
shanghai.addEventListener("click", popularCityShanghai);

function popularCityDublin(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#dublin-button");
  let displayedCity = document.querySelector("#city-name-value");
  displayedCity.innerHTML = `Dublin`;
  let apiKey = "e11ebc4d827268b35ca3d430280dba81";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dublin&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
let dublin = document.querySelector("#dublin-button");
dublin.addEventListener("click", popularCityDublin);

function popularCitySeattle(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#seattle-button");
  let displayedCity = document.querySelector("#city-name-value");
  displayedCity.innerHTML = `Seattle`;
  let apiKey = "e11ebc4d827268b35ca3d430280dba81";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
let seattle = document.querySelector("#seattle-button");
seattle.addEventListener("click", popularCitySeattle);

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    minutes = `0${minutes}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

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
  let dateElement = document.querySelector("#date-element");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  celsiusTemp = response.data.main.temp;
}
function displayFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}

let celsiusTemp = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);
