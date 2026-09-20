const getFirstNPrimes = require('../getFirstNPrimes');

test('returns the first 5 prime numbers in order', () => {
    expect(getFirstNPrimes(5)).toEqual([2, 3, 5, 7, 11]);
});

test('returns just the first prime when n is 1', () => {
    expect(getFirstNPrimes(1)).toEqual([2]);
});

test('returns the first 10 primes for a larger n', () => {
    expect(getFirstNPrimes(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});