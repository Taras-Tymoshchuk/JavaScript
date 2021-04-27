const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "1ea65a0d5346315feea9e4b89e2e7d6c"
}

function getWeather() {
   const cityId = document.querySelector('#citys').value;

   fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);

}
let city = {
   689558 : "Vinnytsia",
   703448 : "Kyiv",
   698740 : "Odessa",
   2673730 : "Stockholm"
}

let section = document.querySelector('.form-control');
let selectList = document.createElement('select');

selectList.id = 'citys';
section.appendChild(selectList);

   for( key in city){
      let option = document.createElement('option');
      option.value = key;
      option.text = city[key];
      selectList.appendChild(option);
}
getWeather();
document.querySelector('.btn').onclick = getWeather;



function showWeather(data) {
	console.log(data);
   document.querySelector('.city-name').textContent= data.name;
   document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+ '&deg;';
   document.querySelector('.weather').textContent= data.weather[0]['description'];
   document.querySelector('.icon').innerHTML
   document.querySelector('.pressure').innerHTML= 'Pressure - '+ data.main.pressure + ' P';
   document.querySelector('.humidity').innerHTML= 'Humidity - '+ data.main.humidity + ' &#37;';
   document.querySelector('.wind').innerHTML = 'Wind speed - '+ Math.round(data.wind.speed) + ' mps';
}



