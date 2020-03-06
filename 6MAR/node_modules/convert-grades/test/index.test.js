/* global describe, it */

const expect = require('chai').expect
const convertGrade = require('..').default

describe('#convert-grade', function () {
  it('Convertir 30 grados celcius a fahrenheit', function () {
    const convert = convertGrade(30, 'c', 'f')
    expect(convert).to.equal('86.00')
  })

  it('Convertir 30 grados celcius a kelvin', function () {
    const convert = convertGrade(30, 'c', 'k')
    expect(convert).to.equal('303.15')
  })

  it('Convertir 30 fahrenheit a celcius', function () {
    const convert = convertGrade(30, 'f', 'c')
    expect(convert).to.equal('-1.11')
  })

  it('Convertir 40 fahrenheit a kelvin', function () {
    const convert = convertGrade(40, 'f', 'k')
    expect(convert).to.equal('277.59')
  })

  it('Convertir 40 kelvin a celcius', function () {
    const convert = convertGrade(40, 'k', 'c')
    expect(convert).to.equal('-233.15')
  })

  it('Convertir 40 kelvin a fahrenheit', function () {
    const convert = convertGrade(40, 'k', 'f')
    expect(convert).to.equal('-387.67')
  })
})
