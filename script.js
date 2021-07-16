var tableBody = document.getElementById("repo-table");
var fetchButton = document.getElementById('fetch-button');
var searchField = document.getElementById('city-search');
var mainTemp = document.getElementById('temp')
var currentCity = document.getElementById('city-weather')
var cityForcast = document.getElementById('forecast-name')
var forecast1 = document.getElementById('day1')
var forecast2 = document.getElementById('day2')
var forecast3 = document.getElementById('day3')
var forecast4 = document.getElementById('day4')
var forecast5 = document.getElementById('day5')
var jumbo = document.getElementById('jumbotron') 
var today = moment();



$("#currentDay").text(today.format("MMM Do, YYYY"));

function getApi() {
    var cityName = searchField.value.trim();
    searchField.value= '';
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=2e76a4916ab2468049134ed86af4a1ca`
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log("Weather description: ",data.weather[0].description)
        currentCity.textContent = data.name
        mainTemp.textContent = `Temperature: ${data.main.temp} Wind: ${data.wind.speed} Humidity: ${data.main.humidity}`

        }
    );
        var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=2e76a4916ab2468049134ed86af4a1ca`
        fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log("Weather description: ",data.list[0].main)
            forecast1.textContent = `${data.list[0].dt_txt} Temperature: ${data.list[0].main.temp}Wind: ${data.list[0].wind.speed} Humidity: ${data.list[0].main.humidity}`        
            forecast2.textContent = `${data.list[10].dt_txt} Temperature: ${data.list[10].main.temp}Wind: ${data.list[10].wind.speed} Humidity: ${data.list[10].main.humidity}`
            forecast3.textContent = `${data.list[20].dt_txt} Temperature: ${data.list[20].main.temp}Wind: ${data.list[20].wind.speed} Humidity: ${data.list[20].main.humidity}`
            forecast4.textContent = `${data.list[28].dt_txt} Temperature: ${data.list[28].main.temp}Wind: ${data.list[28].wind.speed} Humidity: ${data.list[28].main.humidity}`
            forecast5.textContent = `${data.list[32].dt_txt} Temperature: ${data.list[32].main.temp}Wind: ${data.list[35].wind.speed} Humidity: ${data.list[35].main.humidity}`
    
            }
        );
    
}
 fetchButton.addEventListener('click', getApi);