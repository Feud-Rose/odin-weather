import './style.css'
import displayCurrentWeather from './modules/displayWeather'

/* https://api.weatherapi.com/v1/current.json?key=a5ee7b29b7584f11a64175418240501&q=Calgary */

async function getWeatherData(location) {
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=a5ee7b29b7584f11a64175418240501&q=${location}&days=3`,
        { mode: 'cors' }
    )
    const weatherData = await response.json()
    console.log(weatherData)
    displayCurrentWeather(weatherData) 
}

function validate(location) {
    const cityRegEx = new RegExp(
        "^[a-zA-Z\\u0080-\\u024F]+(?:. |-| |')*([1-9a-zA-Z\\u0080-\\u024F]+(?:. |-| |'))*[a-zA-Z\\u0080-\\u024F]*$"
    )
    if (cityRegEx.test(location)) {
        return true
    } else {
        return false
    }
};

(function submitLocation() {
    const location = document.querySelector('#location')

    const button = document.querySelector('button')
    button.addEventListener('click', (e) => {
        console.log(location.value)
        let valid = validate(location.value)
        if (valid) {
            console.log('yes')
            getWeatherData(location.value)
        } else {
            console.log('no')
        }
    })
})()

console.log(getWeatherData('Calgary'))
