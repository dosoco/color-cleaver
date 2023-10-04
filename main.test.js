const colorDeconstructor = require('./color-deconstructor.js');
const isValidPrimary = require('./is-valid-primary.js');
const isValidSecondary = require('./is-valid-secondary.js');
const colorCombinator = require('./color-combinator.js');


describe('colorDeconstructor', () => {
  it(`returns the two colors a color comes from`, () => {
    expect(colorDeconstructor('orange')).toBe('red and yellow')
    expect(colorDeconstructor('purple')).toBe('red and blue')
    expect(colorDeconstructor('green')).toBe('blue and yellow')
  })
})

describe('isValidPrimary', () => {
  it('returns whether the given color is a valid primary color', () => {
    const validPrimary1 = 'red';
    const validPrimary2 = 'yellow';
    const validPrimary3 = 'blue';
    const invalidPrimary1 = 'orange';
    const invalidPrimary2 = 'blorgon';
    const invalidPrimary3 = 'ted';
    expect(isValidPrimary(validPrimary1)).toBe(true);
    expect(isValidPrimary(validPrimary2)).toBe(true);
    expect(isValidPrimary(validPrimary3)).toBe(true);
    expect(isValidPrimary(invalidPrimary1)).toBe(false);
    expect(isValidPrimary(invalidPrimary2)).toBe(false);
    expect(isValidPrimary(invalidPrimary3)).toBe(false);
  })
})

describe('isValidSecondary', () => {
  it('returns whether the given color is a valid primary color', () => {
    const validSecondary1 = 'orange';
    const validSecondary2 = 'purple';
    const validSecondary3 = 'green';
    const invalidSecondary1 = 'red';
    const invalidSecondary2 = 'black';
    const invalidSecondary3 = 'white';
    expect(isValidSecondary(validSecondary1)).toBe(true);
    expect(isValidSecondary(validSecondary2)).toBe(true);
    expect(isValidSecondary(validSecondary3)).toBe(true);
    expect(isValidSecondary(invalidSecondary1)).toBe(false);
    expect(isValidSecondary(invalidSecondary2)).toBe(false);
    expect(isValidSecondary(invalidSecondary3)).toBe(false);
  })
})

describe('colorCombinator', () => {
  it(`returns the combination of the two given colors`, () => {
    expect(colorCombinator('red', 'yellow')).toBe('orange')
    expect(colorCombinator('yellow', 'red')).toBe('orange')
    expect(colorCombinator('red', 'blue')).toBe('purple')
    expect(colorCombinator('blue', 'red')).toBe('purple')
    expect(colorCombinator('yellow', 'blue')).toBe('green')
    expect(colorCombinator('blue', 'yellow')).toBe('green')
  })
})
