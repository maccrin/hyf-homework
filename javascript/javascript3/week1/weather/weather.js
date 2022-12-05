
const city = document.getElementById('citySelect');
const p = document.getElementById('error');
// The given time is unixtime so we have to change it local date-time format
localTime = (unixTime) => {
    const time = new Date(unixTime * 1000);
    const hours = time.getHours();
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    const sunTime = hours + ':' + minutes + ':' + seconds + ' ' + 'CET';
    return sunTime;
}
// Unit of Temperature
getUnit = (unit) => {
    let units = '';
    switch (unit) {
        case "standard": {
            //Kelvin unit
            units = "K";
            return units;
            break;
        }
        case "metric": {
            //Celsius unit
            units = "&#8451;";
            return units;
            break;
        }
        case "imperial": {
            //Fahrenheit unit
            units = "&#x2109;";
            return units;
            break;

        }
    }
}
//Display Weather Data in HTML Page
function showWeather(data, unit) {
    console.log(data);
    document.getElementById('city').innerHTML = `${data.name},${data.sys.country}`;
    const givenUnit = getUnit(unit);
    document.getElementById('temperature').innerHTML = `Temp: ${data.main.temp}${givenUnit}`;
    document.getElementById('icon').innerHTML = `${data.weather[0].icon} ${data.weather[0].description}`;
    givenUnit === "&#x2109;" ? document.getElementById('wind-speed').innerHTML = `Wind-Speed: ${data.wind.speed}miles/hour` :
        document.getElementById('wind-speed').innerHTML = `Wind-Speed: ${data.wind.speed}meter/sec`;
    document.getElementById('cloudy').innerHTML = `Cloudiness: ${data.clouds.all}%`;
    document.getElementById('sunrise').innerHTML = `Sunrise:${localTime(data.sys.sunrise)}`;
    document.getElementById('sunset').innerHTML = `Sunset:${localTime(data.sys.sunset)}`;
    p.innerText = '';
    city.value = '';
}
//Display map
myMap = (latitude, longitude) => {
    if (latitude && longitude) {
        console.log(latitude, longitude);
        let map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: latitude, lng: longitude },
            zoom: 9
        });
        new google.maps.Marker({
            position: map.center,
            map: map
        });
    }

}
//We need longitude and latitude to display map
const cityPosition = (name) => {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=YOUR_APP_ID");
    const option = {
        q: name,
        appid: "24ef2bc1a4031b6826a6a1246ebddbbb"
    }
    Object.keys(option).forEach(key => {
        url.searchParams.set(key, option[key]);
    });
    fetch(url)
        .then(response => response.json())
        .then(data => {
            try {
                if (data.cod !== 200 && name !== '') {
                    throw new Error(`City Name Doesn't Exist,Please provide Correct City Name`);
                }
                myMap(data.coord.lat, data.coord.lon);
            }
            catch (e) {
                city.value = '';
                p.innerText = `${e.message}`;
            }

        });
}
// This function is created to get weather data for individual city and unit given by user input
const displayWeather = (name, currentUnit) => {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=YOUR_APP_ID");
    const option = {
        q: name,
        appid: "24ef2bc1a4031b6826a6a1246ebddbbb"
    }
    Object.keys(option).forEach(key => {
        url.searchParams.set(key, option[key]);
    })
    console.log(url);
    url.searchParams.append('units', currentUnit);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            showWeather(data, currentUnit);
        });
}
//Event Handler for weather
const getWeather = () => {
    try {
        if (!city.value) {
            throw new Error(`Please Enter City name`);
        }
        const unit = document.getElementById('unit');
        cityPosition(city.value);
        displayWeather(city.value, unit.value);

    }

    catch (e) {
        p.innerText = `${e.message}`;
    }

}

//To display current position weather with Map
window.onload = (() => {
    navigator.geolocation.getCurrentPosition((position) => {
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("longitude", position.coords.longitude);
        myMap(position.coords.latitude, position.coords.longitude);
    });

    const lat = localStorage.getItem("latitude");
    const long = localStorage.getItem("longitude");
    if (lat && long) {
        const url = new URL("https://api.openweathermap.org/data/2.5/weather?&appid=YOUR_APP_ID");
        url.searchParams.set('appid', "24ef2bc1a4031b6826a6a1246ebddbbb");
        const param = {
            units: "metric",
            lat: lat,
            lon: long
        }
        Object.keys(param).forEach(key => {
            url.searchParams.append(key, param[key]);
        })

        fetch(url)
            .then(response => response.json())
            .then(data => {
                showWeather(data, param['units']);
            })
    }
});
//Event listner triggered by a Button as per the requirement
document.getElementById('btn-weather').addEventListener('click', getWeather);
