const getFirstNPrimes = require('./getFirstNPrimes');
const buildGrid = require('./buildGrid');

// Get user input from command line arguments
const UserInput = process.argv[2];
// Convert the input to a number
const n = Number(UserInput);

const primes = getFirstNPrimes(n);
const grid = buildGrid(primes);
console.log(grid);