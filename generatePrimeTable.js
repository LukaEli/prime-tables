/**
 * Function to check if a number is prime.
 * @param {number} num - The number to check for primality.
 * @returns {boolean} - Returns true if the number is prime, false otherwise.
 */
function isPrime(num){
    if(num <= 1) return false;
    let divisor = 2;

    // Checking divisors up to the square root is enough
    // bigger than the square root would always have a matching smaller
    // factor we'd have already found
    while (divisor * divisor <= num) {
        if (num % divisor === 0) {
            return false;
        }

        divisor++;
    }
    
    return true;
}

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

console.log(getFirstNPrimes(5));