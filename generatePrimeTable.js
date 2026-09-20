function isPrime(num){
    if(num <= 1) return false;
    let divisor = 2;

    
    while (divisor * divisor <= num) {
        if (num % divisor === 0) {
            return false;
        }

        divisor++;
    }
    
    return true;
}

function getFirstNPrimes(n) {
    const primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

console.log(getFirstNPrimes(5));