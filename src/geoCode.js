const request = require('request');
const apiKey = '2512396cbd0d4118713773769e6d11b1';

const getgeoCode = (address, callBack) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaW1hbnVyYWd0IiwiYSI6ImNrc2didWQyNzFpbXgybm9kMHdkc2dhdDkifQ.dFlX1ywyGuXkVIEwKC9osA&limit=1';
    request({ url: url, json: true }, (err, res) => {
        if (res) {
            callBack(undefined, {
                langt: res.body.features[0].center[0],
                lat: res.body.features[0].center[1],
            })
        }
    });
}
const getforeCast = (langt, lat, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + langt + '&appid=' + apiKey + '';
    request({ url: url, json: true }, (err, res) => {
        if (res) {
            callback(undefined, {
                description: 'Location Name is: ' + res.body.name + ', It seem to be like ' + res.body.weather[0].description + ' and wind speed is: ' + res.body.wind.speed
            });
        }
    });
}

exports.getFiles = { getgeoCode, getforeCast };