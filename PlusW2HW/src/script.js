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

function getSearchedCity() {
  let cityValue = document.querySelector("#enter-city");
  let displayedCity = document.querySelector("#city-name-value");
  displayedCity.innerHTML = `${cityValue}`;
}
let city = document.querySelector("#enter-city");
city.addEventListener("submit", getSearchedCity);

let apiKey = "e11ebc4d827268b35ca3d430280dba81";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
function displayWeather(response) {
  let temperatureElement = document.querySelector("#searched-temp");
  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}`;
}

axios.get(apiUrl).then(displayWeather);
