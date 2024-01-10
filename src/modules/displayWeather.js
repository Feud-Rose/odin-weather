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

    let conditionDiv = document.createElement('div')
    conditionDiv.classList.add('conditions')
    todayDiv.appendChild(conditionDiv)
    conditionDiv.textContent = condition.day
    
    let icon = document.createElement("img")
    icon.src = `./images/day/${condition.icon}.png`
    conditionDiv.appendChild(icon)

    let currentTemp = document.createElement('div')
    currentTemp.textContent = `Current Temperature: ${weatherData.current.temp_c}, Feels like: ${weatherData.current.feelslike_c} `
    todayDiv.appendChild(currentTemp)

}

function updateForecast(weatherData, day) {
console.log(weatherData)
const div = document.querySelector(day)
let date = new Date(weatherData.date).toLocaleDateString('en-us', { weekday:"long"})
console.log(date)
div.firstChild.textContent = date
}

function processCode(num) {
    let condition = data.find(({code}) => code === num)
    return condition
}