let cityID = 5784549;
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
        document.getElementById('humidity').textContent = (jsObject.main.humidity);
        
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
        for (let i=0; i<3; i++) {
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

const alertURL = `https://api.openweathermap.org/data/2.5/onecall?lat=40.6097&lon=-111.9391&exclude=current,minutely,hourly,daily&appid=${appid}&units=imperial`;
//const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${appid}&units=imperial`;

fetch(alertURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        
        
        const alerts = jsObject['alerts']; 
        
        if(alerts !== undefined && alerts.length>0) {
            alert(alerts[0].description);
        }
        
    });
