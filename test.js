const test = require('tape')
const toBatCase = require('.')

test('should bat case the text', (t) => {
  t.equal(toBatCase('NA NA NA NA NA NA NA NA NA NA NA NA NA NA'), '∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N', 'ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu')
  t.equal(toBatCase('Bat_Case!'), '¡ǝsɐƆ‾ʇɐ𐐒', '¡ʇxǝ⊥ ʇɐ𐐒')
  t.end()
})
