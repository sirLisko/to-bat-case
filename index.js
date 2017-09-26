const dictionary = require('./dictionary')

module.exports = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  return str
    .split('')
    .map(ch => dictionary[ch] || dictionary[ch.toLowerCase()] || ch)
    .reverse()
    .join('')
}
