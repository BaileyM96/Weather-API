//set up variables to access DOM
var momentDate = moment().format("MMM Do YY");
$("#city-name").text(momentDate); //Need to add container for HTML for date
var citySearch = $("#city-lists");
var searchBtn = document.getElementById("btn btn-outline");
var currentForecast = document.querySelector("#The-weather");
var weekForecast = document.querySelector(".forecast");
var apiKey ='6fd2a7e7bfa6dd9234d5df15d716d7d3';
var cityName = document.querySelector("#city-name");
var cityList = [];
var weatherInfoEl = document.querySelector(".weather-info");



searchBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log('Hello World');
});


function getCityConditions() {
    var city = "riverside";
    var geoAPI = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + apiKey;
    fetch(geoAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        var {temp} = data.main;
        var place = data.name;
        var {description, icon} = data.weather[0];
        var {sunrise, sunset} =  data.sys;
        var fahrenheit = (temp * 0.9)  / 5 + 32;
        var sunrise = new Date(sunrise * 1000);
        var sunset = new Date(sunset * 1000);
        cityName.textContent = `${place}`;
        weatherInfoEl.textContent = `${fahrenheit.toFixed(2)} °F`
        // Need to fix the card body for current forecast
    })
  
}
getCityConditions();

//-----------------------------5 Day forecast--------------------------------------------------------------------------------------------------------------------------------------------------------
function getFiveDayForecast() {
    var town = "riverside"
  var forecastWeather = "https://api.openweathermap.org/data/2.5/forecast?q="+ town + "&appid=" + apiKey + "&cnt=5";
  fetch(forecastWeather)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var getArray = data.list;
    for (i = 0; i < getArray.length; i++) {
        console.log(getArray[i]);
        //Finish array to be able to access the array elements***
    }
    var foreCastTemperture = data.list;
        // foreCastTemperture= data.list;
        // console.log(foreCastTemperture);
        weekForecast.textContent = `${foreCastTemperture}`
    

  })
  //  make this function like the daily forecast and see how to add it
}
getFiveDayForecast();

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


//set color for UV Index

//create forecast cards

//print daily forecast