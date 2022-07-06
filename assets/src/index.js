const city = document.getElementById("city");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const minmax = document.getElementById("minmax");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const form = document.getElementById("form");
const input = document.getElementById("input");

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=cc7c8fdfcbbccc9dc62e21bde4bb83ee&units=metric&lang=az"
)
  .then((response) => response.json())
  .then((data) => {
    city.innerText = `${data.name}, ${data.sys.country}`;
    temp.innerText = `${Math.round(data.main.temp)} ° C`;

    description.innerText = `${capitalize(data.weather[0].description)}`;
    minmax.innerText = `${Math.round(data.main.temp_min)} °C / ${Math.round(
      data.main.temp_max
    )} °C`;
    wind.innerText = `Küləyin sürəti : ${data.wind.speed} m/s`;
    pressure.innerText = `Atmosfer Təziqi : ${data.main.pressure} hpa`;
    humidity.innerText = `Rütubət : ${data.main.humidity} %`;
  });

let url = "https://api.openweathermap.org/data/2.5/";
let key = "ed4eefb40d34b24476c61a5f21abc734";

function getResult(city) {
  let link = `${url}weather?q=${city}&appid=${key}&units=metric&lang=az`;
  fetch(link)
    .then((response) => response.json())
    .then(out);
}

let out = (data) => {
  city.innerText = `${data.name}, ${data.sys.country}`;
  temp.innerText = `${Math.round(data.main.temp)} ° C`;

  description.innerText = `${capitalize(data.weather[0].description)}`;
  minmax.innerText = `${Math.round(data.main.temp_min)} °C / ${Math.round(
    data.main.temp_max
  )} °C`;
  wind.innerText = `Küləyin sürəti : ${data.wind.speed} m/s`;
  pressure.innerText = `Atmosfer Təziqi : ${data.main.pressure} hpa`;
  humidity.innerText = `Rütubət : ${data.main.humidity} %`;
  input.value = "";
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getResult(input.value);
});
