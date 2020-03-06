const request = require('request');
const convertGrade = require('convert-grades').default;

const url = 'https://api.darksky.net/forecast/b9e047b40654671e3e7454b86b5c392f/19,-103?lang=es';

/* request({url}, (error, response) => { //Comunmente se ve asi { url: url }
    if (!erro) {
        console.log(response);
    }
}); */

/* request({url}, (error, response) => {
    const data = JSON.parse(response.body)
    var convertToCelcius = convertGrade(data.currently.temperature, 'f', 'c')//Sin esto te lo da en Fahrenheit
    console.log(convertToCelcius+' Grados Celsius');
}); */

request({url, json: true}, (error, response) => {
    var convertToCelcius = convertGrade(response.body.daily.data[0].temperatureHigh, 'f', 'c');
    console.log(convertToCelcius+' grados celsius. '+response.body.daily.data[0].summary);
});