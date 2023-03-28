
const weatherInCity = {

    url: 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19',

    cityInput: document.querySelector('.city'),
    submitInput: document.querySelector('.submit'),
    wrapper: document.querySelector('.weather-container'),
    body: document.querySelector('body'),

    submitListener() {
        document.addEventListener('submit', (e) => {
            e.preventDefault();
            this.url = `http://api.openweathermap.org/data/2.5/weather?q=${this.cityInput.value}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
            this.weather();
        });
    },

    weather() {

        const weather = fetch(this.url)
        .then(data => data.json())
        .then(data => {
            if (data.cod < 400) {
            this.wrapper.innerHTML = `
            <p>City: ${data.name}</p>
            <p>Temp: ${data.main.temp} (max: ${data.main.temp_max}, min: ${data.main.temp_max})</p>
            <p>Pressure: ${data.main.pressure}</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}</p>
            <p>Wind speed: ${data.wind.speed}</p>
            <p>Deg: ${data.wind.deg}</p>
            <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
            `;
            } else {
                if (this.cityInput.value.trim() === '') {
                let error1 = new Error('City was not entered');
                alert(error1);
                } else {
                    let error2 = new Error('Incorrect city name');
                    alert(error2);
                }
            };
        });
    }
};

weatherInCity.submitListener();
weatherInCity.weather();



