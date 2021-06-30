let cityID = 5784549;
let appid = 'd3a2626fd2e28d194ab631006b4977ef';

const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=40.6097&lon=-111.9391&exclude=current,minutely,hourly,daily&appid=${appid}&units=imperial`;
//const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${appid}&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        
        
        const alerts = jsonObject['alerts']; 
        
        if(alerts.length>0) {
            alert(alerts[0].description);
        }
        
    });

