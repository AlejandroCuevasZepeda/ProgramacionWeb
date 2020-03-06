const convertGrade = (grade, ...units) => {
  let unit = units.join('').toLowerCase()

  const celciusToFahrenheit = grade => ((9 / 5 * grade) + 32).toFixed(2)

  const celciusToKelvin = grade => (grade + 273.15).toFixed(2)

  const fahrenheitToCelcius = grade => ((5 * (grade - 32)) / 9).toFixed(2)

  const fahrenheitToKelvin = grade => (((5 * (grade - 32)) / 9) + 273.15).toFixed(2)

  const kelvinToCelcius = grade => (grade - 273.15).toFixed(2)

  const kelvinToFahrenheit = grade => (((9 * (grade - 273.15)) / 5) + 32).toFixed(2)

  if (unit === 'cf') {
    return celciusToFahrenheit(grade)
  } else if (unit === 'ck') {
    return celciusToKelvin(grade)
  } else if (unit === 'fc') {
    return fahrenheitToCelcius(grade)
  } else if (unit === 'fk') {
    return fahrenheitToKelvin(grade)
  } else if (unit === 'kc') {
    return kelvinToCelcius(grade)
  } else if (unit === 'kf') {
    return kelvinToFahrenheit(grade)
  } else {
    return 'Error convert'
  }
}

export default convertGrade
