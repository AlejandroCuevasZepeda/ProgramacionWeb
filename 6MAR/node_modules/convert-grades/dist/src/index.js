'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var convertGrade = function convertGrade(grade) {
  for (var _len = arguments.length, units = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    units[_key - 1] = arguments[_key];
  }

  var unit = units.join('').toLowerCase();

  var celciusToFahrenheit = function celciusToFahrenheit(grade) {
    return (9 / 5 * grade + 32).toFixed(2);
  };

  var celciusToKelvin = function celciusToKelvin(grade) {
    return (grade + 273.15).toFixed(2);
  };

  var fahrenheitToCelcius = function fahrenheitToCelcius(grade) {
    return (5 * (grade - 32) / 9).toFixed(2);
  };

  var fahrenheitToKelvin = function fahrenheitToKelvin(grade) {
    return (5 * (grade - 32) / 9 + 273.15).toFixed(2);
  };

  var kelvinToCelcius = function kelvinToCelcius(grade) {
    return (grade - 273.15).toFixed(2);
  };

  var kelvinToFahrenheit = function kelvinToFahrenheit(grade) {
    return (9 * (grade - 273.15) / 5 + 32).toFixed(2);
  };

  if (unit === 'cf') {
    return celciusToFahrenheit(grade);
  } else if (unit === 'ck') {
    return celciusToKelvin(grade);
  } else if (unit === 'fc') {
    return fahrenheitToCelcius(grade);
  } else if (unit === 'fk') {
    return fahrenheitToKelvin(grade);
  } else if (unit === 'kc') {
    return kelvinToCelcius(grade);
  } else if (unit === 'kf') {
    return kelvinToFahrenheit(grade);
  } else {
    return 'Error convert';
  }
};

exports.default = convertGrade;