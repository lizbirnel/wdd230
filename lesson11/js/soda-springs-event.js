const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); //temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name === "Soda Springs") {
        let events = towns[i].events;
        let card = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = "Upcoming Events";

        let sodaSpringsDataDiv = document.createElement("div");
        for (let j=0; j<events.length; j++) {
            let p = document.createElement('p');
            p.textContent = events[j];
            sodaSpringsDataDiv.appendChild(p);
        }
        

        card.appendChild(h3);
        card.appendChild(sodaSpringsDataDiv);
        
        document.querySelector("section.sodaSpringsEvent").appendChild(card);
      }
    }

  });
