const test = require('tape')
const toBatCase = require('.')

test('should bat case the text', (t) => {
  t.equal(toBatCase('NA NA NA NA NA NA NA NA NA NA NA NA NA NA'), '∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N ∀N', 'ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu ɐu')
  t.equal(toBatCase('Bat_Case!'), '¡ǝsɐƆ‾ʇɐ𐐒', '¡ʇxǝ⊥ ʇɐ𐐒')
  t.end()
})

test('should bat case the text - no reverse', (t) => {
  t.equal(toBatCase('NA NA NA NA NA NA NA NA NA NA NA NA NA NA', true), 'N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀ N∀', 'na na na na na na na na na na na na na na')
  t.equal(toBatCase('Bat_Case!', true), '𐐒ɐʇ‾Ɔɐsǝ¡', '𐐒ɐʇ ⊥ǝxʇ¡')
  t.end()
})
