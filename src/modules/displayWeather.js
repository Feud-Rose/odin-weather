import data from "../data/weather_conditions.json"


export default function displayCurrentWeather(weatherData) {
  console.log(weatherData)
  let today = updateToday(weatherData)
  let tomorrow = updateForecast(weatherData.forecast.forecastday[1], ".tomorrow")
  let twoDays = updateForecast(weatherData.forecast.forecastday[2], ".twoDays")
}


function updateToday(weatherData){
    console.log(weatherData)
    const condition = processCode(weatherData.current.condition.code)
    console.log(condition)
    const todayDiv = document.querySelector('.today')
    const locationHeader = document.querySelector('.locationHeader')
    console.log(locationHeader)
    locationHeader.textContent = `Weather in ${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}.` 

    let currentDescription = document.querySelector(".currentDescription")
    console.log(currentDescription)
    currentDescription.textContent = condition.day

    let img = document.querySelector(".todayIcon")
    img.src = `./images/day/${condition.icon}.png`

    let currentTemp = document.querySelector('.currentTemp')
    currentTemp.textContent = `${weatherData.current.temp_c}\u00B0C`;
   

     let feelsLike = document.querySelector('.feelsLike')
    feelsLike.textContent = `${weatherData.current.feelslike_c}\u00B0C `;
}

function updateForecast(weatherData, day) {

const div = document.querySelector(day)
console.log(div)
let date = new Date(weatherData.date).toLocaleDateString('en-us', { weekday:"long"})
console.log(date)
div.firstChild.textContent = date

const condition = processCode(weatherData.day.condition.code)

let img = document.querySelector(`${day}Icon`)
img.src = `./images/day/${condition.icon}.png`
img.alt = weatherData.day.condition.text
img.title = weatherData.day.condition.text

let temp = document.querySelector(`${day}Temp`)
temp.textContent = `${weatherData.day.maxtemp_c}\u00B0C ${weatherData.day.mintemp_c}\u00B0C`;

}

function processCode(num) {
    let condition = data.find(({code}) => code === num)
    return condition
}