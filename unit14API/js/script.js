const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "1ea65a0d5346315feea9e4b89e2e7d6c"
}


function getWeather() {
   const cityId = document.querySelector('#city').value;

   fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);

}

function showWeather(data) {
	console.log(data);
   document.querySelector('.city-name').textContent= data.name;
   document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+ '&deg;';
   document.querySelector('.weather').textContent= data.weather[0]['description'];
   document.querySelector('.icon').innerHTML
   document.querySelector('.pressure').innerHTML= 'Pressure - '+ data.main.pressure + ' P';
   document.querySelector('.humidity').innerHTML= 'Humidity - '+ data.main.humidity + ' &#37;';
   document.querySelector('.wind').innerHTML = 'Wind speed - '+ data.wind.speed + ' mps';
}
getWeather();
document.querySelector('.btn').onclick = getWeather;

