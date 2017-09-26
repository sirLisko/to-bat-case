# to-bat-case

Convert a string to a ǝsɐƆ ʇɐ𐐒. 🦇


## Installation

```
$ npm install to-bat-case
```

## Example

```js
const toBatCase = require('to-bat-case')

toBatCase('NA NA NA NA NA NA NA NA NA NA NA NA NA NA') // "∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N"
toBatCase('Bat_Case!') // "¡ǝsɐƆ‾ʇɐ𐐒"
```

## API

### toBatCase(input)

Returns the `input` converted to bat case.

#### input

Type: `string`

## Inspired by

The series of [case helpers](https://github.com/ianstormtaylor/to-case) and [this tweet](https://twitter.com/lyzidiamond/status/874423709867491328).
