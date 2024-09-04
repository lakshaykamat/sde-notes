/**
 * Checks if a given number is prime.
 * 
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 * 
 * @param {number} num - The number to check for primality.
 * @returns {boolean} Returns true if the number is prime, false otherwise.
 * 
 * @example
 * 
 * console.log(isPrimeNumber(7));  // Output: true
 * console.log(isPrimeNumber(20)); // Output: false
 * 
 * @completed 3 Sep 2024 
 */
function isPrimeNumber(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime numbers
    if (num === 2) return true; // 2 is the only even prime number

    // Check for factors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible by any number other than 1 and itself, it's not prime
        }
    }

    return true; // If no factors found, it's a prime number
}

// Test cases
console.log(isPrimeNumber(7));  // Output: true
console.log(isPrimeNumber(20)); // Output: false
