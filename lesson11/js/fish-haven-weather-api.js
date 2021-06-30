let cityID = 5585010;
let appid = 'd3a2626fd2e28d194ab631006b4977ef';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${appid}&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        

        const currently = document.querySelector('#currently');
        currently.textContent = jsObject.weather[0].description; 
        document.getElementById('currentTemp').textContent = (jsObject.main.temp);
        
        /*const currentTemp = document.querySelector('#currentTemp');
        currentTemp.textContent = jsObject.main.temp;*/
        const high = document.querySelector('#high');
        high.textContent = jsObject.main.temp_max;
        document.getElementById("windChill").innerHTML = windChill(jsObject.main.temp, jsObject.wind.speed);
        document.getElementById('humidity').textContent = (jsObject.main.humidity);
        document.getElementById('windSpeed').textContent = jsObject.wind.speed;
        
        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
        


        


        /*const temperature = document.querySelector('#current-temp');
        temperature.textContent = jsObject.main.temp;
        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);*/
    });

const apiURL2= `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&APPID=${appid}`;

fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
       // console.log(jsObject);
        let forecastArray = jsObject.list.filter(filterTime);
        //console.log(forecastArray);
        for (let i=0; i<5; i++) {
            let image = document.createElement('img');
            image.setAttribute('src', `https://openweathermap.org/img/w/${forecastArray[i].weather[0].icon}.png`);
            image.setAttribute('alt', forecastArray[i].weather[0].description);
            document.getElementById(`imgDay${i+1}`).appendChild(image);
            document.getElementById(`temp${i+1}`).textContent = forecastArray[i].main.temp_max;
        }
        
        
        
    });

function filterTime(list) {
    let d = new Date(list.dt_txt);
    if (d.getHours()==18 && d.getMinutes()==0) {
        return true;
    }
    else {
        return false;
    }
}