# Temperature converter

Converts any temperature to Celsius, Fahrenheit and Kelvin

## Installation

```
  npm install --save convert-grades
```

## Use

```js
  import convertGrade from 'convert-grades'
```

## Conversions

```js
  /* Convert from Celsius to Fahrenheit */
  convertGrade(30, 'c', 'f')

  /* Convert from Celsius to Kelvin */
  convertGrade(30, 'c', 'k')

  /* Convert from Fahrenheit to Celsius */
  convertGrade(30, 'f', 'c')

  /* Convert from Fahrenheit to Kelvin */
  convertGrade(30, 'f', 'k')

  /* Convert from Kelvin to Celsius */
  convertGrade(30, 'k', 'c')

  /* Convert from Kelvin to Fahrenheit */
  convertGrade(30, 'k', 'f')
```

### Credits
- [Jose Uscanga Molina](https://twitter.com/jousmo)
- [Paulo Sergio Martinez Ricardez](https://twitter.com/paulonner)

### License

[MIT](https://opensource.org/licenses/MIT)
