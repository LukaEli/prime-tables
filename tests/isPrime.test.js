const isPrime = require('../src/isPrime')

test('returns true for a prime number', () => {
    expect(isPrime(7)).toBe(true);
});

test('returns false for a non-prime number', () => {
    expect(isPrime(8)).toBe(false);
});

test('returns false for numbers less than 2', () => {
    expect(isPrime(1)).toBe(false);
});

test('returns false when given something that is not a number', () => {
    expect(isPrime(NaN)).toBe(false);
});