

export default function displayCurrentWeather(weatherData) {
  console.log(weatherData)
  let today = updateToday(weatherData)
  let tomorrow = updateForecast(weatherData.forecast.forecastday[1], ".tomorrow")
  let twoDays = updateForecast(weatherData.forecast.forecastday[2], ".twoDays")
}


function updateToday(weatherData){
    console.log(weatherData)
    const content = document.querySelector('.today')
    content.textContent = `Location: ${weatherData.location.name}, Current Temperature: ${weatherData.current.temp_c}, Feels like: ${weatherData.current.feelslike_c} `

}

function updateForecast(weatherData, day) {
console.log(weatherData)
const div = document.querySelector(day)
let date = new Date(weatherData.date).toLocaleDateString('en-us', { weekday:"long"})
console.log(date)
div.firstChild.textContent = date
}