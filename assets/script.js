//set up variables to access DOM
var citySearch = $("#city-lists");
var searchBtn = document.getElementById("btn btn-outline");
var currentForecast = document.getElementById("The-weather");
var weekForecast = document.getElementById("5-dayForecast");
var cityEl = document.getElementById("city-name");
var apiKey ='6fd2a7e7bfa6dd9234d5df15d716d7d3';
var cityList = [];

//add weather attributes


//create buttons  when webpage reloads
searchBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log('Hello World');
});
// THEN I am presented with current and future conditions for that city and that city is added to the search history
function getCityConditions() {
    var city = "riverside";
    var geoAPI = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + apiKey;
    fetch(geoAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}
getCityConditions();
// WHEN I view current weather conditions for that city
// fetch(geoAPI)
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
// });

//create button to access previous search and connect it to function
// function createCityButton(index);
// function clickCityButton(event);

//when clear button pressed, clear city data and buttons
// function clearButton(event)
//take any city name that has multiple words, change first letter to upper case
// function splitString(string)


//get latitude and longitude of city, create button if URL is valid
// function getLatitudeLongitude() {
//     var requestURL = "https://api.openweathermap.org/data/2.5/weather?lat="+ "&lon=" + "&appid=" + apiKey; 

// }



// fetch(requestURL)

//use lat and lon coordinates to get weather

//get weather  for given latitude and longitude
// function getWeather(url)
// fetch(url)
//current conditions
// var temp = data.current.temp;
//need wind, humidity, uvIndex, date, iconURL...create variable containing all current
// createCurrentCard(date, currentDatatVal)

//forecasted conditions
//read in unix date and return standard date

//create card to display current weather information

//set color for UV Index

//create forecast cards

//print daily forecast



// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city