
const appId = '90429a9df56e4951e71892289b7ef2e6';
const city = 'Kolhapur';

const getDataForCity = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
  .then(response => response.json());


const createCardHtml = (name, emoji, temp, feelsLike, description) => `
  <div class="card">
    <div class="row no-gutters align-items-center">    
      <div class="col-2 h2 pl-1 pt-1 text-center">                
        ${emoji}
      </div>
      <div class="col-10">
        <div class="card-body">
          <div class="row card-title justify-content-between align-items-center mr-3 mb-1">
            <h4>${name}</h4>
            <h6>${temp}c, feels like ${feelsLike}c</h6>
          </div>
          <div class="row">
            <h5 class="card-subtitle text-muted">${description}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
`;


const emojis = {
  '01d': '☀',
  '02d': '⛅',
  '03d': '☁',
  '04d': '☁',
  '09d': '🌧',
  '10d': '🌦',
  '11d': '⛈',
  '13d': '❄',
  '50d': '💨',
  '01n': '☀',
  '02n': '⛅',
  '03n': '☁',
  '04n': '☁',
  '09n': '🌧',
  '10n': '🌦',
  '11n': '⛈',
  '13n': '❄',
  '50n': '💨',
};

const goButton = document.querySelector('#go-button');
const cityInput = document.querySelector('#city-input');
const weatherContainer = document.querySelector('#weather-container');
goButton.addEventListener('click', () => {
  const city = cityInput.value;

  getDataForCity(city)
    .then(data => {
  
      const name = data.name;
      const emoji = emojis[data.weather[0].icon];
      const temp = data.main.temp;
      const feelsLike = data.main.feels_like;
      const description = data.weather[0].description;

    
      const cardHtml = createCardHtml(name, emoji, temp, feelsLike, description);
      weatherContainer.innerHTML = cardHtml;
    });
});