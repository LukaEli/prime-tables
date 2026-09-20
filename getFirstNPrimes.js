const isPrime = require('./isPrime');

/**
 * Function to get the first N prime numbers.
 * @param {number} n - The number of prime numbers to generate.
 * @returns {number[]} - An array containing the first N prime numbers.
 */
function getFirstNPrimes(n) {
    const primes = [];
    let num = 2;

    // Continue finding prime numbers until we have N primes
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

module.exports = getFirstNPrimes;