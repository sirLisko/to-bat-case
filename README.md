# to-bat-case [![Build Status][travis-image]][travis-url]

> Convert a string to ǝsɐƆ ʇɐ𐐒. 🦇

Example: `Bat_Case!` → `¡ǝsɐƆ‾ʇɐ𐐒`

## Installation

```bash
$ npm install to-bat-case
```

## Example

```js
const toBatCase = require('to-bat-case')

toBatCase('NA NA NA NA NA NA NA NA NA NA NA NA NA NA')
//=> '∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N'

toBatCase('Bat_Case!')
//=> '¡ǝsɐƆ‾ʇɐ𐐒'

toBatCase('NA NA NA NA NA NA NA NA NA NA NA NA NA NA', false)
//=> 'N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀'

toBatCase('Bat_Case!', false)
//=> '𐐒ɐʇ‾Ɔɐsǝ¡'
```

## API

### toBatCase(input, [revert])

Returns the `input` converted to bat case.

#### input

Type: `string`

#### revert

Type: `bool`

Default: `true`

## Inspired by

The series of [case helpers](https://github.com/ianstormtaylor/to-case) and [this tweet](https://twitter.com/lyzidiamond/status/874423709867491328).

[travis-image]: https://travis-ci.org/sirLisko/to-bat-case.svg?branch=master
[travis-url]: https://travis-ci.org/sirLisko/to-bat-case
