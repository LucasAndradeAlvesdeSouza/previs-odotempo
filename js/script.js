'use strict';
let celsius = true;
let currentCity = 'Recife';
const example = {  
             "data":[
                {  
                  "valid_date":"2017-04-01",
                   "ts":1503954000,
                   "datetime":"2017-04-01",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                },
                {  
                  "valid_date":"2017-04-02",
                   "ts":1503954000,
                   "datetime":"2017-04-02",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                },
                {  
                  "valid_date":"2017-04-03",
                   "ts":1503954000,
                   "datetime":"2017-04-03",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                },
                {  
                  "valid_date":"2017-04-04",
                   "ts":1503954000,
                   "datetime":"2017-04-04",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                },
                {  
                  "valid_date":"2017-04-05",
                   "ts":1503954000,
                   "datetime":"2017-04-05",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                },
                {  
                  "valid_date":"2017-04-06",
                   "ts":1503954000,
                   "datetime":"2017-04-06",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                }
             ],
             "city_name":"Raleigh",
             "lon":"-78.63861",
             "timezone":"America\/New_York",
             "lat":"35.7721",
             "country_code":"US",
             "state_code":"NC"
          };
$(function() {
    const apiURL = 'https://api.weatherbit.io/v2.0/forecast/daily';
    const apiKey = 'e99ca0d808ee4f6ba420e9bc05cdd298';
    const iconLink = 'https://www.weatherbit.io/static/img/icons/';
    const weekdays = {
        '0': 'Dom',
        '1': 'Seg',
        '2': 'Ter',
        '3': 'Qua',
        '4': 'Qui',
        '5': 'Sex',
        '6': 'Sáb'
    };
    getForecast(currentCity);
    $('#search').on('click', function(e) {
        e.preventDefault();
        currentCity = $('#city').val();
        getForecast(currentCity);
    });
    $('#cities-list').on('click', function(e) {
        const choice = e.target.innerText;
        getForecast(choice);
        $('#city').val(choice);
    });
    $('#unit-toggle').on('change', function(e) {
      celsius = !celsius;
      getForecast(currentCity);
    });
    function getForecast(city) {
        $('#load-icon').css('display', '');
        $('#forecast').css('display', 'none');
        const unit = (celsius ? '°C' : '°F');
        console.log(unit);
        $('#unit').text(unit);
        clearFields();
        $.ajax({
            url: apiURL,
            data: { 
                city: city, 
                key: apiKey,
                lang: 'pt'
            },
            success: function(result) {
                $('#load-icon').css('display', 'none');
                $('#forecast').css('display', '');
                $('#city-name').text(result.city_name);
                console.log(result);
                const nextDays = result.data.slice(1);
                const nextDaysShort = nextDays.map(function(d) {
                    return {
                        max: d.max_temp,
                        min: d.min_temp,
                        date: d.valid_date
                    };
                });
                displayToday(nextDays[0]);
                displayNextDays(nextDaysShort);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(xhr.responseText);
            }
        });
    }
    function clearFields() {
        $('#city-name').empty();
        $('#next-days').empty();
    }
    function displayToday(today) {
        let temperature = Math.round(today.temp);
        if(!celsius) {
          temperature = fromCelsiusToFahrenheit(temperature);
        }
        const weather = today.weather.description;
        const weatherIcon = today.weather.icon;
        const windSpeed = today.wind_spd.toFixed(2);
        const humidity = today.rh;
        $('#weather-icon').attr('src', `${iconLink + weatherIcon}.png`);
        $('#current-temperature').text(temperature);
        $('#current-wind').text(windSpeed);
        $('#current-weather').text(weather);
        $('#current-humidity').text(humidity);
    }
    function displayNextDays(nextDays) {
        for(let i = 0; i < nextDays.length; i++) {
            const date = new Date(nextDays[i].date);
            let min = Math.round(nextDays[i].min);
            let max = Math.round(nextDays[i].max);
            if(!celsius) {
              min = fromCelsiusToFahrenheit(min);
              max = fromCelsiusToFahrenheit(max);
            }
            const day = $(`<div class="day-card">
                            <div class="date">${date.getUTCDate()}/${date.getUTCMonth() + 1}</div>
                            <div class="weekday">${weekdays[date.getUTCDay()]}</div>
                            <span class="max">${max}°</span>
                            <span class="min">${min}°</span>
                        </div>`);
            day.appendTo('#next-days');
        }
    }
    function fromCelsiusToFahrenheit(celsius) {
      return Math.round(1.8 * celsius + 32);
    }
});