const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); //temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        //towns.shift();
        //towns.splice(1,3);

        for (let i = 0; i < towns.length; i++) {

            if(towns[i].name === 'Preston'|| towns[i].name === 'Fish Haven' || towns[i].name === 'Soda Springs') {

            
            let card = document.createElement('article');
            
            let dataDiv = document.createElement('div');

            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name;
            
            let h3 = document.createElement('h3');
            h3.textContent = towns[i].motto;

            let yearFounded = document.createElement('p');
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;

            let population = document.createElement('p');
            population.textContent = 'Population: ' + towns[i].currentPopulation;

            let rainfall = document.createElement('p');
            rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
         
            dataDiv.appendChild(h2);
            dataDiv.appendChild(h3);
            dataDiv.appendChild(yearFounded);
            dataDiv.appendChild(population);
            dataDiv.appendChild(rainfall);

            card.appendChild(dataDiv);
            document.querySelector('div.cards').appendChild(card);
            
            let image = document.createElement('img');
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name);

            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);

          
        }

        }
    });
